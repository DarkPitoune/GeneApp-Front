/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndz19an6r0hb57x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vfzbbqwx",
    "name": "notes",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctcj92ag",
    "name": "deathDate",
    "type": "text",
    "required": false,
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

  // remove
  collection.schema.removeField("vfzbbqwx")

  // remove
  collection.schema.removeField("ctcj92ag")

  return dao.saveCollection(collection)
})
