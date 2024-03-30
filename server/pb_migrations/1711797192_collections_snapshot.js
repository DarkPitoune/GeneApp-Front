/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2024-01-26 18:56:03.807Z",
      "updated": "2024-02-12 12:05:19.359Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
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
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "xgege7ag",
          "name": "isAdmin",
          "type": "bool",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "onlyVerified": false,
        "requireEmail": false
      }
    },
    {
      "id": "9mgm1j0y2kvqf9c",
      "created": "2024-01-29 10:01:20.584Z",
      "updated": "2024-03-26 15:22:40.544Z",
      "name": "articles",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "shqdgeap",
          "name": "title",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "oytzkusw",
          "name": "description",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "g5wsrgvz",
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
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.verified = true",
      "viewRule": "@request.auth.verified = true",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "ndz19an6r0hb57x",
      "created": "2024-01-29 13:12:54.774Z",
      "updated": "2024-03-26 15:05:40.376Z",
      "name": "profiles",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "jleret9f",
          "name": "name",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "krtkotv5",
          "name": "description",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
          "system": false,
          "id": "ws9oqpek",
          "name": "labels",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "ghlbjtpp30eohjd",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.verified = true",
      "viewRule": "@request.auth.verified = true",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "1x9nkrvoi4uoo78",
      "created": "2024-01-29 19:41:38.649Z",
      "updated": "2024-03-26 15:22:17.123Z",
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
            "cascadeDelete": true,
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
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        }
      ],
      "indexes": [
        "CREATE UNIQUE INDEX `idx_eRFG20W` ON `mariages` (\n  `husband`,\n  `wife`\n)"
      ],
      "listRule": "@request.auth.verified = true",
      "viewRule": "@request.auth.verified = true",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "e1z6ejt0kaef1p4",
      "created": "2024-01-30 09:05:43.493Z",
      "updated": "2024-03-26 15:22:01.753Z",
      "name": "parenthoods",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "csbr8kms",
          "name": "mariage",
          "type": "relation",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "1x9nkrvoi4uoo78",
            "cascadeDelete": true,
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
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "ndz19an6r0hb57x",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        }
      ],
      "indexes": [
        "CREATE UNIQUE INDEX `idx_ZkkBxlM` ON `parenthoods` (\n  `mariage`,\n  `child`\n)"
      ],
      "listRule": "@request.auth.verified = true",
      "viewRule": "@request.auth.verified = true",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
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
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
