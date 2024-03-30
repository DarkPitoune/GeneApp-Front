/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ghlbjtpp30eohjd",
    "created": "2024-03-26 09:04:03.371Z",
    "updated": "2024-03-26 09:04:03.371Z",
    "name": "labels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ee1zvcli",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ghlbjtpp30eohjd");

  return dao.deleteCollection(collection);
})
