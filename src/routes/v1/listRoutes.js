const express = require('express');
const router = express.Router();
const listController = require('../../controllers/v1/listController');
const authenticate = require('../../middlewares/auth');

/**
 * @swagger
 * components:
 *   schemas:
 *     List:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The list ID
 *         name:
 *           type: string
 *           description: The name of the list
 *         userId:
 *           type: integer
 *           description: The ID of the user who created the list
 *         todos:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Todo'
 *           description: Tasks associated with the list
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the list was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the list was last updated
 *       example:
 *         id: 1
 *         name: My List
 *         userId: 1
 *         todos: []
 *         createdAt: '2023-08-20T10:00:00.000Z'
 *         updatedAt: '2023-08-20T10:00:00.000Z'
 */

/**
 * @swagger
 * /lists:
 *   post:
 *     summary: Creates a new list
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the list
 *             example:
 *               name: My List
 *     responses:
 *       201:
 *         description: List created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/List'
 *       500:
 *         description: Server error
 */
router.post('/', authenticate, listController.createList);

/**
 * @swagger
 * /lists:
 *   get:
 *     summary: Returns all lists of the authenticated user
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lists retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/List'
 *       500:
 *         description: Server error
 */
router.get('/', authenticate, listController.getAllLists);

/**
 * @swagger
 * /lists/{id}:
 *   get:
 *     summary: Returns a list by ID
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the list
 *     responses:
 *       200:
 *         description: List retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/List'
 *       404:
 *         description: List not found
 *       500:
 *         description: Server error
 */
router.get('/:id', authenticate, listController.getListById);

/**
 * @swagger
 * /lists/{id}:
 *   put:
 *     summary: Updates a list by ID
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the list
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the list
 *             example:
 *               name: Updated List
 *     responses:
 *       200:
 *         description: List updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/List'
 *       404:
 *         description: List not found
 *       500:
 *         description: Server error
 */
router.put('/:id', authenticate, listController.updateList);

/**
 * @swagger
 * /lists/{id}:
 *   delete:
 *     summary: Deletes a list by ID
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the list
 *     responses:
 *       200:
 *         description: List deleted successfully
 *       404:
 *         description: List not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', authenticate, listController.deleteList);

module.exports = router;
