/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0e1wpmvd",
    "name": "photos",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp"
      ],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 20971520,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // update
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
})
