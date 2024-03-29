/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1x9nkrvoi4uoo78")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_eRFG20W` ON `mariages` (\n  `husband`,\n  `wife`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1x9nkrvoi4uoo78")

  collection.indexes = []

  return dao.saveCollection(collection)
})
