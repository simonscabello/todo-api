const listRepository = require('../repositories/listRepository');

exports.createList = async (userId, listData) => {
  return await listRepository.create(userId, listData);
};

exports.getAllLists = async (userId) => {
  return await listRepository.findAll(userId);
};

exports.getListById = async (userId, id) => {
  return await listRepository.findById(userId, id);
};

exports.updateList = async (userId, id, listData) => {
  return await listRepository.updateById(userId, id, listData);
};

exports.deleteList = async (userId, id) => {
  return await listRepository.deleteById(userId, id);
};
