//HTTP Interaction 
const collectionService = require('../services/collectionService');

// Get all the collections
async function getAllCollections(req, res) {
  try {
    const collections = await collectionService.getAllCollections();
    res.status(200).json(collections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Get a collection
async function getCollection(req, res) {
  const { collectionId } = req.params;
  try {
    const collection = await collectionService.getCollection(collectionId);
    res.status(200).json(collection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Create a new collection
async function createCollection(req, res) {
  const newCollectionData = req.body;
  try {
    const createdCollection = await collectionService.createNewCollection(newCollectionData);
    res.status(201).json(createdCollection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Update a collection
async function updateCollection(req, res) {
  const { collectionId } = req.params;
  const updatedCollectionData = req.body;
  try {
    const updatedCollection = await collectionService.updateCollection(collectionId, updatedCollectionData);
    res.status(200).json(updatedCollection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Delete a collection
async function deleteCollection(req, res) {
  const { collectionId } = req.params;
  try {
    await collectionService.deleteCollection(collectionId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllCollections,
  getCollection,
  createCollection,
  updateCollection,
  deleteCollection,
};
