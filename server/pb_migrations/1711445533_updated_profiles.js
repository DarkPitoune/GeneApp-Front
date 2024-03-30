/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ws9oqpek",
    "name": "labels",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ghlbjtpp30eohjd",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // remove
  collection.schema.removeField("ws9oqpek")

  return dao.saveCollection(collection)
})
