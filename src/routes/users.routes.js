const { Router } = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

const router = Router();

// app.get
// app.post
// app.put
// app.delete

//localhost:8000/users
//controlador
router.get('/users', getAllUsers);
// (req, res) => {
//   res.json({ message: 'Obteniendo todos los usuarios' });
// }
router.get('/users/:id', getUserById);

router.post('/users', createUser);
// (req, res) => {
//   res.json({ message: 'Creando un nuevo usuario' });
// }

router.put('/users', updateUser);
// (req, res) => {
//   res.json({ message: 'Actualizando un usuario' });
// }

router.delete('/users', deleteUser);
// (req, res) => {
//   res.json({ message: 'Eliminando un usuario' });
// }

module.exports = router;
// export default router;