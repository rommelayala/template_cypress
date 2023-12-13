https://blog.emumba.com/getting-started-with-cypress-10-and-cucumber-6b43ff68633b

1.- npm init
    
    package name: (cy-bdd-tests) cypress-template
    version: (1.0.0)
    description: Exercises using cypress
    entry point: (index.js)
    test command:
    git repository:
    keywords: BDD, cucucmber, cypress
    author: Rommel
    license: (ISC)

2.- npm i cypress@10.11.0 --save-dev

3.- 
    - Add this line to package.json
        {
        "name": "cypress-template",
        "version": "1.0.0",
        "description": "Exercises using cypress ",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
    ----->  “cypress:open”: “cypress open”

        },
        "keywords": [
            "BDD",
            "cucucmber",
            "cypress"
        ],
        "author": "Rommel",
        "license": "ISC"
        }
    - execute npx cypress open and click on e2e, continue and close the window

4.- Installing cucumber
    npm i @badeball/cypress-cucumber-preprocessor
    npm i cypress @bahmutov/cypress-esbuild-preprocessor esbuild

5.- Configure cypress.config.js 
    
    const createBundler = require(“@bahmutov/cypress-esbuild-preprocessor”);
    const addCucumberPreprocessorPlugin = require(“@badeball/cypress-cucumber-preprocessor”).addCucumberPreprocessorPlugin;
    const createEsBuildPlugin = require(“@badeball/cypress-cucumber-preprocessor/esbuild”).createEsbuildPlugin;
    module.exports = defineConfig({
    e2e: {
    async setupNodeEvents(on, config) {
    // implement node event listeners here
    const bundler = createBundler({
    plugins: [createEsBuildPlugin(config)],
    });
    on(‘file:preprocessor’, bundler);
    await addCucumberPreprocessorPlugin(on, config);
    return config;
    },
    specPattern: ‘cypress/e2e/features/*.feature’
    },
    });

6.- create new file in the root of directory called .cypress-cucumber-preprocessorrc.json
    {
        “stepDefinitions”: [
        “cypress/stepDefinitions/*.js”
        ]
    }
Ejecutando los test

Ejecutar todos los tests 
$ npx cypress run

Ejecutar los especificamente un .js [https://docs.cypress.io/guides/guides/command-line]
(versions < 10 >)  $ npx cypress run --spec "cypress/integration/3-freeRangeTestersWeb/homePage.spec.js"
(versions >= 10 >) $ npx cypress run --spec "cypress/e2e/4.-API/api.cy.js"

7.- update cypress to v 10

Ejecutar 

    2.- npm install --save-dev cypress@13.5.1 (npm install --save-dev cypress@10.11.0)
    3.- Ejecutar "node_modules/.bin/cypress open" para abrir la nueva version
    4.- Aceptar los cambios automaticos
    

Resources:

Cypress versions
https://docs.cypress.io/guides/references/changelog

Testing webs:
https://automationexercise.com/
https://www.freerangetesters.com/
https://demoqa.com/
https://thefreerangetester.github.io/sandbox-automation-testing/
https://rickandmortyapi.com/
https://webdriveruniversity.com/IFrame/index.html


Examples:
https://www.linkedin.com/pulse/cypress-end-testing-automatizaci%C3%B3n-de-pruebas-extremo-n%C3%A9stor-alonso/?originalSubdomain=es