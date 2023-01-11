const { Router } = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

const router = Router();

// app.get
// app.post
// app.put
// app.delete

//localhost:8000/users
//controlador
router.get('/users', getAllUsers); //primer parametro es la ruta y el segundo es la funcion
// (req, res) => {
//   res.json({ message: 'Obteniendo todos los usuarios' });
// }
router.get('/users/:id', getUserById);

//OBTENER A un usuario con sus tareas:
// router.get('/users/:id/tasks', getUserWithTasks);

router.post('/users', createUser);
// (req, res) => {
//   res.json({ message: 'Creando un nuevo usuario' });
// }

router.put('/users/:id', updateUser);
// (req, res) => {
//   res.json({ message: 'Actualizando un usuario' });
// }

router.delete('/users/:id', deleteUser);
// (req, res) => {
//   res.json({ message: 'Eliminando un usuario' });
// }

module.exports = router;
// export default router;