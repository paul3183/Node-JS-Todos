const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const Categories = require('../models/');

const users = [
  { username: "Iannacus", email: 'ian@gmail.com', password: '1234' },  //id 1
  { username: "Jhorman", email: 'jhorman@gmail.com', password: '1234' },// id2
  { username: "lucero", email: 'lucero@gmail.com', password: '1234' } // id3
];

const todos = [
  { title: 'Estudiar Node', description: 'shalashalal', userId: 1 },
  { title: 'Pasear al perro', description: 'shalashalal 2', userId: 1 },
  { title: 'lavar platos', userId: 2 },
  { title: 'ir al chequeo mensual', description: 'porque node no me deja', userId: 3 },
];

const categories = [
  { name: 'personal' },
  { name: 'educacion' },
  { name: 'salud' },
  { name: 'trabajo' },
  { name: 'hogar' },
  { name: 'cocina' },
  { name: 'deporte' },
  { name: 'ocio' },
  { name: 'financiero' },
  { name: 'entretenimiento' },
];

const todosCategories = [
  { categoryId: 1, todoId: 1 },
  { categoryId: 2, todoId: 1 },
  { categoryId: 4, todoId: 1 },
  { categoryId: 1, todoId: 2 },
  { categoryId: 7, todoId: 2 },
  { categoryId: 10, todoId: 2 },
  { categoryId: 3, todoId: 2 },
  { categoryId: 5, todoId: 3 },
  { categoryId: 6, todoId: 3 },
  { categoryId: 1, todoId: 4 },
  { categoryId: 3, todoId: 4 },
];

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
    }, 100);
    setTimeout(() => {
      categories.forEach((category) => Todos.create(todo));
    }, 250);
    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 400);
  })
  .catch((error) => console.log(error));