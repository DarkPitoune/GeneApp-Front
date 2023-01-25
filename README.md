# The d'Hébrail's family genealogy app

This is the front end repository for the d'Hébrail's genealogy app. It is a Vue 3 project inspired by the [gene-app project](https://github.com/genea-app/genea-app).
It currently runs at [genealogie.dhebrail.fr](https://genealogie.dhebrail.fr).

## How to run

The project uses node.js and npm. Ensure you have a recent version of node.js installed (14 or more).

Clone the repository and run the following commands in the project directory.

- install dependencies: `npm install`
- install prettier and pre-commit globally: `npm install -g prettier pre-commit`
- create an env file: `cp .env.example .env.local` and fill it with your own values
- **to run locally**:
  - run the app in development mode: `npm run serve`
  - open the app in your browser: `http://localhost:8080`
  - lint before commit :`npm run lint && prettier --write .`
- **to compile a production build**: `npm run build`. The build artifacts will be stored in the `dist/` directory.
