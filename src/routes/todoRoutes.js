const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { validate, validateId } = require('../middlewares/validate');
const { todoSchema, idSchema } = require('../validators/todoValidator');
const authenticate = require('../middlewares/auth');

router.get('/', authenticate, todoController.getAllTodos);
router.post('/', authenticate, validate(todoSchema), todoController.createTodo);
router.get('/:id', authenticate, validateId(idSchema), todoController.getTodoById);
router.put('/:id', authenticate, validateId(idSchema), validate(todoSchema), todoController.updateTodo);
router.delete('/:id', authenticate, validateId(idSchema), todoController.deleteTodo);

module.exports = router;
