const get = require('lodash.get');
const camelCase = require('lodash.camelcase');
const pkg = require('./package.json');
const finder = require('find-package-json');
const pjson = finder().next().value;
const nodePath = require('path');
const pkgDir = require('pkg-dir');

const options = {
  basePath: "ngrxGen.basePath",
  separateDirectory: "ngrxGen.separateDirectory"
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
  path: '{{ pkg name "actions" }}/{{kebabCase name}}.actions.ts',
  templateFile: './templates/_actions.ts'
}];



function actionGenerator(plop) {
  plop.setGenerator('Action',
    Object.assign({}, defaults('Action'), {
      actions: actions
    })
  );
}

/*
 * Reducer generator
 */
const reducer = [{
    type: 'add',
    path: '{{ pkg name "reducers" }}/{{kebabCase name}}.reducer.ts',
    templateFile: './templates/_reducer.ts'
  },
  {
    type: 'add',
    path: '{{ pkg name "reducers"}}/{{kebabCase name}}.reducer.spec.ts',
    templateFile: './templates/_reducer.spec.ts'
  }
]

function reducerGenerator(plop) {
  plop.setGenerator('Reducer',
    Object.assign({}, defaults('Reducer'), {
      actions: reducer
    })
  );
}

/*
 * Effect generator
 */
const effect = [{
  type: 'add',
  path: '{{ pkg name "effects" }}/{{kebabCase name}}.effects.ts',
  templateFile: './templates/_effect.ts'
}, {
  type: 'add',
  path: '{{ pkg name "effects" }}/{{kebabCase name}}.effects.spec.ts',
  templateFile: './templates/_effects.spec.ts'
}];

function effectGenerator(plop) {
  plop.setGenerator('Effect',
    Object.assign({}, defaults('Effect'), {
      actions: effect
    })
  );
}

/*
 * Service generator
 */
const service = [{
  type: 'add',
  path: '{{ pkg name "services" }}/{{kebabCase name}}.service.ts',
  templateFile: './templates/_service.ts'
}, {
  type: 'add',
  path: '{{ pkg name "services" }}/{{kebabCase name}}.service.spec.ts',
  templateFile: './templates/_service.spec.ts'
}];

function serviceGenerator(plop) {
  plop.setGenerator('Service',
    Object.assign({}, defaults('Service'), {
      actions: service
    })
  );
}

/*
 * All generators
 */
function wholeGenerator(plop) {
  plop.setGenerator('The whole shebang',
    Object.assign({}, defaults('Whole'), {
      description: 'Actions, Reducer, Service and Effect',
      actions: [].concat(actions, reducer, effect, service)
    })
  );
}

// create each helper for basePath, flat directory or separate directories
module.exports = function (plop) {

  plop.addHelper('pkg', (name, type) => {
    const basePath = (pkgDir.sync(process.cwd()), get(pjson, options.basePath));
    return get(pjson, options.basePath) && !get(pjson, options.separateDirectory) ? nodePath.resolve(basePath, camelCase(name)) :
      get(pjson, options.separateDirectory) ? nodePath.resolve(basePath, type) :
      nodePath.resolve(process.cwd(), '.');
  });

  plop.addHelper('position', function (name) {
    return get(pjson, options.separateDirectory) ? '../' + name : '.'
  });

  wholeGenerator(plop);
  actionGenerator(plop);
  reducerGenerator(plop);
  effectGenerator(plop);
  serviceGenerator(plop);

};