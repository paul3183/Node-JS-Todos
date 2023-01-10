const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model')

const users = [
  { username: "Iannacus", email: 'ian@gmail.com', password: '1234' },  //id 1
  { username: "Jhorman", email: 'jhorman@gmail.com', password: '1234' },// id2
  { username: "lucero", email: 'lucero@gmail.com', password: '1234' } // id3
];

const todos = [
  { title: 'tarea1', description: 'shalashalal', userId: 1 },
  { title: 'tarea2', description: 'shalashalal 2', userId: 1 },
  { title: 'tarea imposible', userId: 2 },
  { title: 'dormir zzz', description: 'porque node no me deja', userId: 3 },
];

// const categories = [];

// const todosCategories = [];

// create 
// findOne, findAll, findByPk
// update
// destroy

db.sync({ force: true })
  .then(() => {
    console.log('Iniciando con el sembrado malicioso');
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100)
  })
  .catch((error) => console.log(error));