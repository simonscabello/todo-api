const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { validate, validateId } = require('../middlewares/validate');
const { todoSchema, idSchema } = require('../validators/todoValidator');
const authenticate = require('../middlewares/auth');

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the todo
 *         title:
 *           type: string
 *           description: The title of the todo
 *         description:
 *           type: string
 *           description: The description of the todo
 *         completed:
 *           type: boolean
 *           description: The completion status of the todo
 *         userId:
 *           type: integer
 *           description: The ID of the user who owns the todo
 *       example:
 *         id: 1
 *         title: "Learn Swagger"
 *         description: "Learn how to document APIs with Swagger"
 *         completed: false
 *         userId: 1
 */

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: The todos managing API
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Returns the list of all the todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: The list of the todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get('/', authenticate, todoController.getAllTodos);

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: The todo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Some server error
 */
router.post('/', authenticate, validate(todoSchema), todoController.createTodo);

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Get the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The todo description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 */
router.get(
  '/:id',
  authenticate,
  validateId(idSchema),
  todoController.getTodoById
);

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update the todo by the id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The todo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The todo was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 *       500:
 *         description: Some error happened
 */
router.put(
  '/:id',
  authenticate,
  validateId(idSchema),
  validate(todoSchema),
  todoController.updateTodo
);

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Remove the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The todo was deleted
 *       404:
 *         description: The todo was not found
 */
router.delete(
  '/:id',
  authenticate,
  validateId(idSchema),
  todoController.deleteTodo
);

module.exports = router;
