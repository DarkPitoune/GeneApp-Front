onModelAfterUpdate((e) => {
  const {
    SECRET_ALGOLIA_ID,
    SECRET_ALGOLIA_KEY,
  } = require(`${__hooks}/.env.json`);
  try {
    $http.send({
      url: `https://${SECRET_ALGOLIA_ID}-dsn.algolia.net/1/indexes/dhebrail_family/${e.model.id}`,
      method: "PUT",
      body: JSON.stringify(e.model.publicExport()),
      headers: {
        "X-Algolia-Application-Id": SECRET_ALGOLIA_ID,
        "X-Algolia-API-Key": SECRET_ALGOLIA_KEY,
      },
    });
  } catch (e) {
    console.log("error", e);
  }
}, "profiles");
