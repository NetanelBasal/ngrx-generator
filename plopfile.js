// Libraries
const get = require('lodash.get');
const camelCase = require('lodash.camelcase');
const pkg = require('./package.json');
const finder = require('find-package-json');
const pjson = finder().next().value;
const nodePath = require('path');
const pkgDir = require('pkg-dir');
const fs = require('fs');

// Source code
const basicGenerators = require('./src/basic-generators');
const crudGenerators = require('./src/crud-generators');
const modulesGenerators = require('./src/modules-generators');

const options = {
  basePath: "ngxReduxor.basePath",
  separateDirectory: "ngxReduxor.separateDirectory"
};

function validate(name) {
  return (/.+/).test(name) ? true : `A name is required`;
}

function createGenerator(plop) {
  plop.setGenerator('New',
    {
      description: 'Generate Actions, Reducers, Services and Effect',
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'Name for the new store object?',
        validate: (name) => validate(name)
      }, {
        type: 'list',
        name: 'store',
        message: 'What kind of store do you want to generate?',
        choices: ['CRUD', 'Basic', { name: 'Authentification', disabled: 'Unavailable at this time' }]
      }],
      actions: (data) => {
        let actions = [];
        switch(data.store) {
          case 'CRUD':
            actions = actions.concat(crudGenerators.action, crudGenerators.reducer, crudGenerators.effect, crudGenerators.service);
            break;
          case 'Basic':
            actions = actions.concat(basicGenerators.action, basicGenerators.reducer, basicGenerators.effect, basicGenerators.service);
            break;
        }
        const indexExists = fs.existsSync(nodePath.resolve(get(pjson, options.basePath), 'app.store.ts'));
        const allEffectsExists = fs.existsSync(nodePath.resolve(get(pjson, options.basePath), 'all-effects.ts'));
        const storeReduxorModuleExists = fs.existsSync(nodePath.resolve(get(pjson, options.basePath), 'store-reduxor.module.ts'));
        actions = indexExists ? actions.concat(modulesGenerators.updateIndex) : actions.concat(modulesGenerators.addIndex);
        actions = allEffectsExists ? actions.concat(modulesGenerators.updateAllEffects) : actions.concat(modulesGenerators.addAllEffects);
        actions = storeReduxorModuleExists ? actions.concat(modulesGenerators.updateStoreReduxorModule) : actions.concat(modulesGenerators.addStoreReduxorModule);

        return actions;
      }
    }
  );
}

module.exports = function (plop) {
  if(!get(pjson, options.basePath)) {
    console.log(`The option ${options.basePath} is not set inside your package.json, please update it`.red);
    process.exit(1);
  }
  
  plop.addHelper('basePath', () => nodePath.resolve(get(pjson, options.basePath)));
  
  plop.addHelper('folder', (name, type) => get(pjson, options.separateDirectory) ? type : camelCase(name));
  
  plop.addHelper('position', (name) => get(pjson, options.separateDirectory) ? '../' + name : '.');
  
  plop.setActionType('update app.store', (data, config) => {
    console.log(data)
    const makeDestPath = p => nodePath.resolve(plop.getDestBasePath(), p);
    const fileDestPath = makeDestPath(plop.renderString(config.path));
    try {
      let fileData = fs.readFileSync(fileDestPath, 'utf-8');
      const importFile = "$1\r\nimport * as {{ camelCase name }} from './{{ folder name 'reducers' }}/{{ kebabCase name }}.reducer';";
      const importState = "$1\r\n\t{{ camelCase name }}: {{ camelCase name }}.State;";
      const addReducer = "$1\r\n\t{{ camelCase name }}: {{ camelCase name }}.reducer,";
      fileData = fileData
        .replace(/(\/\/ -- IMPORT REDUCER --)/, plop.renderString(importFile, data))
        .replace(/(\/\/ -- IMPORT STATE --)/, plop.renderString(importState, data))
        .replace(/(\/\/ -- ADD REDUCER --)/, plop.renderString(addReducer, data));
      fs.writeFileSync(fileDestPath, fileData);
      return fileDestPath.replace(nodePath.resolve(plop.getDestBasePath()), '');
    } catch(err) {
      throw typeof err === 'string' ? err : err.message || JSON.stringify(err);
    }
  })

  plop.setActionType('update all-effects', (data, config) => {
    const makeDestPath = p => nodePath.resolve(plop.getDestBasePath(), p);
    const fileDestPath = makeDestPath(plop.renderString(config.path));
    try {
      let fileData = fs.readFileSync(fileDestPath, 'utf-8');
      const importFile = "$1\r\nimport { {{ properCase name }}Effects } from './{{ folder name 'effects' }}/{{ kebabCase name }}.effects';";
      const listEffect = "$1\r\n\t{{ properCase name }}Effects,";
      fileData = fileData
        .replace(/(\/\/ -- IMPORT --)/, plop.renderString(importFile, data))
        .replace(/(\/\/ -- LIST --)/, plop.renderString(listEffect, data))
      fs.writeFileSync(fileDestPath, fileData);
      return fileDestPath.replace(nodePath.resolve(plop.getDestBasePath()), '');
    } catch(err) {
      throw typeof err === 'string' ? err : err.message || JSON.stringify(err);
    }
  })

  plop.setActionType('update store-reduxor', (data, config) => {
    const makeDestPath = p => nodePath.resolve(plop.getDestBasePath(), p);
    const fileDestPath = makeDestPath(plop.renderString(config.path));
    try {
      let fileData = fs.readFileSync(fileDestPath, 'utf-8');
      const importFile = "$1\r\nimport { {{ properCase name }}Service } from './{{ folder name 'services' }}/{{ kebabCase name }}.service';";
      const provider = "$1\r\n\t\t{{ properCase name }}Service,";
      fileData = fileData
        .replace(/(\/\/ -- IMPORT SERVICES --)/, plop.renderString(importFile, data))
        .replace(/(\/\/ -- PROVIDERS --)/, plop.renderString(provider, data))
      fs.writeFileSync(fileDestPath, fileData);
      return fileDestPath.replace(nodePath.resolve(plop.getDestBasePath()), '');
    } catch(err) {
      throw typeof err === 'string' ? err : err.message || JSON.stringify(err);
    }
  })
  
  createGenerator(plop);
};