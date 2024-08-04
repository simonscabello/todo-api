const List = require('../models/list');
const Todo = require('../models/todo');

exports.create = async (userId, listData) => {
  return await List.create({ ...listData, userId });
};

exports.findAll = async (userId) => {
  return await List.findAll({
    where: { userId },
    include: [{ model: Todo, as: 'todos' }],
  });
};

exports.findById = async (userId, id) => {
  return await List.findOne({
    where: { id, userId },
    include: [{ model: Todo, as: 'todos' }],
  });
};

exports.updateById = async (userId, id, listData) => {
  const list = await List.findOne({ where: { id, userId } });
  if (list) {
    return await list.update(listData);
  }
  return null;
};

exports.deleteById = async (userId, id) => {
  const list = await List.findOne({ where: { id, userId } });
  if (list) {
    await list.destroy();
    return list;
  }
  return null;
};
