/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e1z6ejt0kaef1p4",
    "created": "2024-01-30 09:05:43.493Z",
    "updated": "2024-01-30 09:05:43.493Z",
    "name": "parenthoods",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "csbr8kms",
        "name": "mariage",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "1x9nkrvoi4uoo78",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "cjvdskkj",
        "name": "child",
        "type": "relation",
        "required": false,
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
    "indexes": [
      "CREATE UNIQUE INDEX `idx_ZkkBxlM` ON `parenthoods` (\n  `mariage`,\n  `child`\n)"
    ],
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
  const collection = dao.findCollectionByNameOrId("e1z6ejt0kaef1p4");

  return dao.deleteCollection(collection);
})
