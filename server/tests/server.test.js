const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

let todos = [{
  _id: new ObjectID(),
  text: "Test case #1"
}, {
  _id: new ObjectID(),
  text: "Test case #2",
  completed: true,
  completedAt: 123
}];

beforeEach((done) => {
  Todo.deleteMany({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('Post /todos', () => {
  it('should create a new todo', (done) => {
    let text = 'Test todo';
  //  console.log(app);
    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text)
      })
      .end((err, res) => {
        if(err) {
          return done(err);
        }
        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        })
      .catch((e) => done(e));
      })
  });
  it('should send error when todo input is invalid', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        })
        .catch((e) => done(e));
      });

  });
})

describe('POST /todos', () => {
  it('should get todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done)
  });
});

describe('GET /todos/:id', () => {
  it('should return todo doc', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
        // console.log(res.body.todo.text);
      })
      .end(done);
  });
  it('should return 404 if todo not found', (done) => {
    let id = new ObjectID();
    request(app)
      .get(`/todos/${id}`)
      .expect(404)
      .end(done);
  });
  it('should return 404 for invalid object ids', (done) => {
    request(app)
     .get('/todos/123')
     .expect(404)
     .end(done);
  });
});

describe('DELETE /todos/:id', () => {
  it('should remove a todo', (done) => {
    let id = todos[0]._id.toHexString();
    request(app)
      .delete(`/todos/${id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(id);
      })
      .end((err, res) => {
        if(err) {
          return done(err);
        }
        Todo.findById(id).then((todo) => {
          expect(todo).toBeFalsy();
          done();
        }).catch((e) => done(e));
      });
  });
  it('should return 404 if todo not found', (done) => {
    let id = new ObjectID();
    request(app)
      .delete(`/todos/${id}`)
      .expect(404)
      .end(done);
  });
  it('should return 404 for invalid object ids', (done) => {
    request(app)
      .delete('/todos/123')
      .expect(404)
      .end(done);
  });
});

describe('PATCH /todos/:id', () => {
  it('should update completed todo to incomplete', (done) => {
    let id = todos[1]._id.toHexString();
    let text = 'Hooha';
    request(app)
      .patch(`/todos/${id}`)
      .send({completed: false, text})
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.completed).toBe(false);
        expect(res.body.todo.completedAt).toBe(null);
        expect(res.body.todo.text).toBe(text);
      })
      .end(done);
  });
  it('should update incomplete todo to completed', (done) => {
    let id = todos[0]._id.toHexString();
    let text = 'Test case patch';
    request(app)
      .patch(`/todos/${id}`)
      .send({completed: true, text})
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.completed).toBe(true);
        expect(typeof res.body.todo.completedAt).toBe('number');
        expect(res.body.todo.text).toBe(text);
      })
      .end(done);
      });

});
