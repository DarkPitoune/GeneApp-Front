/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1x9nkrvoi4uoo78",
    "created": "2024-01-29 19:41:38.649Z",
    "updated": "2024-01-29 19:41:38.649Z",
    "name": "mariages",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "lgl4omla",
        "name": "wife",
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
  const collection = dao.findCollectionByNameOrId("1x9nkrvoi4uoo78");

  return dao.deleteCollection(collection);
})
