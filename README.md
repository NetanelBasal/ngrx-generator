# ngx-reduxor: save time by generating ngrx architecture with no effort!

## Intro
If you are a user of @ngrx libs, check this generator! This will help you to save time by creating an architecture for your ngrx files. 

Initially created by @NetanelBasal (called ngrx-generator). After some times, 
and using the recommendations of the community, the generator has been improved.

Now, it has the following features:
* Create Actions, reducers, effects and services in one command! Just provide a name and the generator will do the rest.
* Provide a module to easily import all the reducers, effects and services in your Angular app.
* Naming convention to prevent errors.
* MetaReducer: non-invasive logger in development.
* Generator available: CRUD actions, Basic actions.
* Mainly inspired by the [ngrx styleguide](https://github.com/orizens/ngrx-styleguide)
* Use the latest Angular HttpClient.
* Provide unit tests.

## prerequisites

```
@ngrx/store@^4.0.0
@ngrx/effects@^4.0.0
```

## Getting Started

Install it via npm:

```shell
npm install ngx-reduxor --save-dev
```

or with Yarn:
```shell
yarn add --dev ngx-reduxor
```

## Configuration

in your package.json, add the following:

```
  ...
  "scripts": {
    "ngx-reduxor": "ngx-reduxor"
  },
  ...
  "ngxReduxor": {
    "basePath": "./src/app/store", // For example, you can set it everywhere
    "separateDirectory": false // Or true if you want a directory for each actions, effects, reducers,...
  }
  ...
```

## Import to your Angular app
The first time you launch the generator, it creates a module called StoreReduxorModule.
This module regroups all the reducers, effects and provided services created.
There is also an index file containing the list of all reducers and you can also use this file to create some metaReducer,
like a logger (for debugging purpose). 
After that, in your AppModule, you just need to import the module and it will expose the store in your app.

```
...
import { StoreReduxorModule } from './path/to/your/store-reduxor.module';
...
@NgModule({
...
imports: [
  ...
  StoreReduxorModule.forRoot(),
  ...
]
...
```

## Usage

```shell
npm run ngx-reduxor
```

And then, follow the instructions... ;-)
Congratulations! You are now able to create huge and scalable app in Redux inside your Angular applications!

## Issues/Improvements
Don't hesitate to send a PR or to contribute to this project. If you have suggestion or a problem, feel free to open an issue.

## [Wiki](https://github.com/kmathy/ngx-reduxor/wiki)
A wiki is being written to provide a documentation of the architecture for each generator, some best practices to use in Ngrx or to facilitate your development. Everyone can contribute. This is also a place to put some kind messages about how you love this tool (A bit of softness in this brutal world)

## Roadmap
It is just the beginning! The idea is to provide a tool that can help you to manage easily your ngrx applications and also, create powerful actions. [See the next version](https://github.com/kmathy/ngx-reduxor/projects/1)
