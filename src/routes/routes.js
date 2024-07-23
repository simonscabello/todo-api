const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { validate, validateId } = require('../middlewares/validate');
const { todoSchema, idSchema } = require('../validators/todoValidator');

router.get('/', todoController.getAllTodos);
router.post('/', validate(todoSchema), todoController.createTodo);
router.get('/:id', validateId(idSchema), todoController.getTodoById);
router.put('/:id', validateId(idSchema), validate(todoSchema), todoController.updateTodo);
router.delete('/:id', validateId(idSchema), todoController.deleteTodo);

module.exports = router;
