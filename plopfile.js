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
      message: name + ' for?',
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

const indexAdd = [{
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
 * All generators
 */
function createGenerator(plop) {
  let actionArray = [].concat(actions, reducer, effect, service)
  fs.existsSync(nodePath.resolve(get(pjson, options.basePath), 'index.ts')) 
    ? actionArray = actionArray.concat(updateIndex)
    : actionArray = actionArray.concat(indexAdd);

  plop.setGenerator('Create',
    Object.assign({}, defaults('Whole'), {
      description: 'Generate Actions, Reducer, Service and Effect',
      actions: actionArray
    })
  );
}

module.exports = function (plop) {
  if(!get(pjson, options.basePath)) {
    console.log('The option', options.basePath, 'is not set inside your package.json, please update it'.red);
    process.abort();
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
  
  createGenerator(plop);
  // renameGenerator(plop);
  // deleteGenerator(plop);
};