// All about logic
const { Collection } = require('../../models');

async function getAllCollections() {
  try {
    const collections = await Collection.findAll();
    return collections;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving collections.');
  }
}

async function getCollection(id) {
  try {
    const collection = await Collection.findByPk(id);
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

async function updateCollection(id, updatedCollectionData) {
  try {
    const collection = await Collection.findByPk(id);
    if (!collection) {
      throw new Error('Collection not found.');
    }
    await collection.update(updatedCollectionData);
    return collection;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating collection details.');
  }
}

async function deleteCollection(id) {
  try {
    const collection = await Collection.findByPk(id);
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
  getAllCollections,
  getCollection,
  createCollection,
  updateCollection,
  deleteCollection,
};
