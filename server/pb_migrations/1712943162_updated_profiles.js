/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0e1wpmvd",
    "name": "photos",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // remove
  collection.schema.removeField("0e1wpmvd")

  return dao.saveCollection(collection)
})
