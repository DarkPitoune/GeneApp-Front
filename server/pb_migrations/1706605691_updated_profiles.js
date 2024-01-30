/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x7e0wbbl",
    "name": "sex",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "M",
        "F"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x7e0wbbl",
    "name": "sex",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "M",
        "F"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
