// All about logic
const { Collection } = require('../../models');

async function getAllCollection() {
  try {
    const collections = await Collection.findAll();
    return collections;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving collections.');
  }
}

async function getCollection(collectionId) {
  try {
    const collection = await Collection.findByPk(collectionId);
    if (!collection) {
      throw new Error('Collection not found.');
    }
    return collection;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving collection details.');
  }
}

async function createCollection(newCollectionData) {
  try {
    const createdCollection = await Collection.create(newCollectionData);
    return createdCollection;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating collection.');
  }
}

async function updateCollection(collectionId, updatedCollectionData) {
  try {
    const collection = await Collection.findByPk(collectionId);
    if (!collection) {
      throw new Error('collection not found.');
    }
    await collection.update(updatedCollectionData);
    return collection;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating collection details.');
  }
}

async function deleteCollection(collectionId) {
  try {
    const collection = await Collection.findByPk(collectionId);
    if (!collection) {
      throw new Error('Collection not found.');
    }
    await collection.destroy();
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting collection.');
  }
}

module.exports = {
  getAllCollection,
  getCollection,
  createCollection,
  updateCollection,
  deleteCollection,
};
