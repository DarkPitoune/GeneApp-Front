/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e1z6ejt0kaef1p4")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e1z6ejt0kaef1p4")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
