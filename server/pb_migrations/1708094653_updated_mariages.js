/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1x9nkrvoi4uoo78")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w3efpw3g",
    "name": "husband",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ndz19an6r0hb57x",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1x9nkrvoi4uoo78")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w3efpw3g",
    "name": "husband",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ndz19an6r0hb57x",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
