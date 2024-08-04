const listService = require('../../services/listService');
const ListTransformer = require('../../transformers/listTransformer');

const listTransformer = new ListTransformer();

exports.createList = async (req, res) => {
  try {
    const newList = await listService.createList(req.user.id, req.body);
    const transformedList = listTransformer.transform(newList);

    res.status(201).json({
      data: transformedList,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllLists = async (req, res) => {
  try {
    const lists = await listService.getAllLists(req.user.id);
    console.log(lists);
    const transformedLists = listTransformer.transformCollection(lists);

    res.status(200).json({
      data: transformedLists,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getListById = async (req, res) => {
  try {
    const list = await listService.getListById(req.user.id, req.params.id);
    if (!list) {
      res.status(404).json({ message: 'List not found' });
    } else {
      const transformedList = listTransformer.transform(list);
      res.status(200).json({
        data: transformedList,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateList = async (req, res) => {
  try {
    const updatedList = await listService.updateList(
      req.user.id,
      req.params.id,
      req.body
    );
    if (!updatedList) {
      res.status(404).json({ message: 'List not found' });
    } else {
      const transformedList = listTransformer.transform(updatedList);
      res.status(200).json({
        data: transformedList,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteList = async (req, res) => {
  try {
    const deletedList = await listService.deleteList(
      req.user.id,
      req.params.id
    );
    if (!deletedList) {
      res.status(404).json({ message: 'List not found' });
    } else {
      res.status(200).json({ message: 'List deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
