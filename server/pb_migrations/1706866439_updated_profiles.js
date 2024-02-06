/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mw8hyfkg",
    "name": "birthDate",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^(?P<year>\\d{4})(-(?P<month>\\d{2})(-(?P<day>\\d{2}))?)?$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mw8hyfkg",
    "name": "birthDate",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
