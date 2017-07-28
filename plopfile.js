const get    = require('lodash.get');
const pkg    = require('./package.json');
const finder = require('find-package-json');
const pjson  = finder().next().value;
const path   = require('path');
const pkgDir = require('pkg-dir');

function validate(name, value) {
    if ((/.+/).test(value)) {
        return true;
    }
    return name + ' is required';
}

const defaults = function (name, plop) {
    
    const p = [
        {
            type: 'input',
            name: 'name',
            message: name + ' for?',
            validate: validate.bind(this, name + ' name')
        },
    
    ];
    
    if (!get(pjson, 'ngrxGen.basePath')) {
        p.push({
            type: 'directory',
            name: 'path',
            message: 'where would you like to put this component?',
            basePath: plop.getPlopfilePath()
        })
    }
    return {
        description: 'New ' + name,
        prompts: p
    }
}

const actions = [
    {
        type: 'add',
        path: '{{pkg path "actions"}}/{{dashCase name}}.actions.ts',
        templateFile: './templates/_actions.ts'
    }
];


function actionGenerator(plop) {
    plop.addPrompt('directory', require('inquirer-directory'));
    plop.setGenerator('Action',
        Object.assign({}, defaults('Action', plop), {
            actions: actions
        })
    );
}

const reducer = [
    {
        type: 'add',
        path: '{{ pkg path "reducers" }}/{{dashCase name}}.reducer.ts',
        templateFile: './templates/_reducer.ts'
    },
    {
        type: 'add',
        path: '{{ pkg path "reducers"}}/{{dashCase name}}.reducer.spec.ts',
        templateFile: './templates/_reducer.spec.ts'
    }
]

function reducerGenerator(plop) {
    plop.setGenerator('Reducer',
        Object.assign({}, defaults('Reducer', plop), {
            actions: reducer
        })
    );
}

const effect = [
    {
        type: 'add',
        path: '{{ pkg path "effects" }}/{{dashCase name}}.effects.ts',
        templateFile: './templates/_effect.ts'
    }, {
        type: 'add',
        path: '{{ pkg path "effects" }}/{{dashCase name}}.effects.spec.ts',
        templateFile: './templates/_effects.spec.ts'
    }
];

function effectGenerator(plop) {
    plop.setGenerator('Effect',
        Object.assign({}, defaults('Effect', plop), {
            actions: effect
        })
    );
}

const service = [
    {
        type: 'add',
        path: '{{ pkg path "services" }}/{{dashCase name}}.service.ts',
        templateFile: './templates/_service.ts'
    }, {
        type: 'add',
        path: '{{ pkg path "services" }}/{{dashCase name}}.service.spec.ts',
        templateFile: './templates/_service.spec.ts'
    }
];

function serviceGenerator(plop) {
    plop.setGenerator('Service',
        Object.assign({}, defaults('Service', plop), {
            actions: service
        })
    );
}

function wholeGenerator(plop) {
    plop.setGenerator('The whole shebang',
        Object.assign({}, defaults('Whole', plop), {
            description: 'Actions, Reducer, Service and Effect',
            actions: [].concat(actions, reducer, effect, service)
        })
    );
}

module.exports = function (plop) {
    
    plop.addHelper('pkg', function (p, name) {
        
        if (get(pjson, 'ngrxGen.basePath')) {
            const basePath = path.resolve(get(pjson, 'ngrxGen.basePath'));
            return path.resolve(pkgDir.sync(process.cwd()), get(pjson, 'ngrxGen.basePath'), name);
        }
        
        if (get(pjson, 'ngrxGen.seperateDirectory')) {
            return path.resolve(process.cwd(), name);
        }
        
        return path.resolve(plop.getPlopfilePath(), p, name);
    });
    
    plop.addHelper('position', function (name) {
        if (get(pjson, 'ngrxGen.seperateDirectory')) {
            return '../' + name;
        }
        return '.';
    });
    
    wholeGenerator(plop);
    actionGenerator(plop);
    reducerGenerator(plop);
    effectGenerator(plop);
    serviceGenerator(plop);
    
    
};