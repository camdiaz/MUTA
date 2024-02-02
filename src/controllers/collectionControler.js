//HTTP Interaction 
const collectionService = require('../services/collectionService');

// Get all the collections
async function getAllCollections(req, res) {
  try {
    const collections = await collectionService.getAllCollections();
    res.status(200).json({message: "Collections:", collections});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Collections not found. Please try again.' });
  }
}

// Get a collection
async function getCollection(req, res) {
  try {
    const { id } = req.params;
    const collection = await collectionService.getCollection(id);
    res.status(200).json({message: "Collection:", collection});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Collection not found. Please try again.' });
  }
}

// Create a new collection
async function createCollection(req, res) {
  try {
    const newCollectionData = req.body;
    const createdCollection = await collectionService.createCollection(newCollectionData);
    res.status(201).json({message: "Collections created:", createdCollection});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Collection not created. Please try again.' });
  }
}

// Update a collection
async function updateCollection(req, res) {
  const updatedCollectionData = req.body;
  const { id } = req.params;
  try {
    const updatedCollection = await collectionService.updateCollection(id, updatedCollectionData);
    res.status(200).json({message: "Collection updated:", updatedCollection});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Collection not updated. Please try again.' });
  }
}

// Delete a collection
async function deleteCollection(req, res) {
  try {
    const { id } = req.params;
    await collectionService.deleteCollection(id);
    res.status(200).json({ error: 'Collection deleted:', id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Collection not deleted. Please, try again.' });
  }
}

module.exports = {
  getAllCollections,
  getCollection,
  createCollection,
  updateCollection,
  deleteCollection,
};
