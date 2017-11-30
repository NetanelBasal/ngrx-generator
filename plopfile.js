const get = require('lodash.get');
const camelCase = require('lodash.camelcase');
const pkg = require('./package.json');
const finder = require('find-package-json');
const pjson = finder().next().value;
const nodePath = require('path');
const pkgDir = require('pkg-dir');
const fs = require('fs');

const options = {
  basePath: "ngxReduxor.basePath",
  separateDirectory: "ngxReduxor.separateDirectory"
};

function validate(name, value) {
  return (/.+/).test(value) ? true : `A name is required`;
}

const defaults = function (name) {
  return {
    description: 'New ' + name,
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name?',
      validate: validate.bind(this, name)
    }]
  }
}

/*
 * Actions generator
 */
const actions = [{
  type: 'add',
  path: '{{ basePath }}/{{ folder name "actions" }}/{{kebabCase name}}.actions.ts',
  templateFile: './templates/_actions.ts'
}];

/*
 * Reducer generator
 */
const reducer = [{
    type: 'add',
    path: '{{ basePath }}/{{ folder name "reducers" }}/{{kebabCase name}}.reducer.ts',
    templateFile: './templates/_reducer.ts'
  },
  {
    type: 'add',
    path: '{{ basePath }}/{{ folder name "reducers"}}/{{kebabCase name}}.reducer.spec.ts',
    templateFile: './templates/_reducer.spec.ts'
  }
]

/*
 * Effect generator
 */
const effect = [{
  type: 'add',
  path: '{{ basePath }}/{{ folder name "effects" }}/{{kebabCase name}}.effects.ts',
  templateFile: './templates/_effect.ts'
}, {
  type: 'add',
  path: '{{ basePath }}/{{ folder name "effects" }}/{{kebabCase name}}.effects.spec.ts',
  templateFile: './templates/_effects.spec.ts'
}];

/*
 * Service generator
 */
const service = [{
  type: 'add',
  path: '{{ basePath }}/{{ folder name "services" }}/{{kebabCase name}}.service.ts',
  templateFile: './templates/_service.ts'
}, {
  type: 'add',
  path: '{{ basePath }}/{{ folder name "services" }}/{{kebabCase name}}.service.spec.ts',
  templateFile: './templates/_service.spec.ts'
}];

/*
* Create file index.ts if doesn't exist
*/

const addIndex = [{
  type: "add",
  path: "{{ basePath }}/index.ts",
  templateFile: './templates/_index.ts'
}]

/*
* Modify index.ts with new generated files
*/

const updateIndex = [{
  type: "update index",
  path: "{{ basePath }}/index.ts"
}]

/*
* Create file all-effects.ts if doesn't exist
*/

const addAllEffects = [{
  type: 'add',
  path: '{{ basePath }}/all-effects.ts',
  templateFile: './templates/_all-effects.ts'
}]

/*
 * Modify all-effects.ts with new effect generated
 */

 const updateAllEffects = [{
   type: 'update all-effects',
   path: '{{ basePath }}/all-effects.ts'
 }]

/*
* Create store-reduxor.module.ts if doesn't exist
*/
const addStoreReduxorModule = [{
  type: 'add',
  path: '{{ basePath }}/store-reduxor.module.ts',
  templateFile: './templates/_store-reduxor.module.ts'
}]

/*
* Modify store-reduxor.module.ts with new generated files
*/
const updateStoreReduxorModule = [{
  type: 'update store-reduxor',
  path: '{{ basePath }}/store-reduxor.module.ts'
}]

/*
 * All generators
 */
function createGenerator(plop) {
  let actionArray = [].concat(actions, reducer, effect, service)
  const indexExists = fs.existsSync(nodePath.resolve(get(pjson, options.basePath), 'index.ts'));
  const allEffectsExists = fs.existsSync(nodePath.resolve(get(pjson, options.basePath), 'all-effects.ts'));
  const storeReduxorModuleExists = fs.existsSync(nodePath.resolve(get(pjson, options.basePath), 'store-reduxor.module.ts'));
  actionArray = indexExists ? actionArray.concat(updateIndex) : actionArray.concat(addIndex);
  actionArray = allEffectsExists ? actionArray.concat(updateAllEffects) : actionArray.concat(addAllEffects);
  actionArray = storeReduxorModuleExists ? actionArray.concat(updateStoreReduxorModule) : actionArray.concat(addStoreReduxorModule);
  plop.setGenerator('Create',
    Object.assign({}, defaults('Whole'), {
      description: 'Generate Actions, Reducer, Service and Effect',
      actions: actionArray
    })
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
  
  plop.setActionType('update index', (data, config) => {
    const makeDestPath = p => nodePath.resolve(plop.getDestBasePath(), p);
    const fileDestPath = makeDestPath(plop.renderString(config.path));
    try {
      let fileData = fs.readFileSync(fileDestPath, 'utf-8');
      const importFile = "$1\r\nimport * as {{ camelCase name }} from './{{ folder name 'reducers' }}/{{ kebabCase name }}.reducer';";
      const importState = "$1\r\n\t{{ camelCase name }}: {{ camelCase name }}.State,";
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
      const importFile = "$1\r\nimport {{ properCase name }}Effects from './{{ folder name 'effects' }}/{{ kebabCase name }}.effects';";
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
  // renameGenerator(plop);
  // deleteGenerator(plop);
};