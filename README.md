# ngx-reduxor: save time by generating ngrx architecture with no effort!

## Intro
If you are a user of @ngrx libs, check this generator! This will help you to save time by creating an architecture for your ngrx files. 

Initially created by @NetanelBasal (called ngrx-generator). After some times, 
and using the recommendations of the community, the generator has been improved.

Now, it has the following features:
* Create Actions, reducers, effects and services in one command! Just provide a name and the generator will do the rest
* Provide a module to easily import all the reducers, effects and services in your Angular app.
* Actions already created: Get, Create and Delete.
* Use the latest HttpClient
* Provide unit tests

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

## Usage

```shell
npm run ngx-reduxor
```

And then, follow the instructions... ;-)

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

## Issues/Improvements
Don't hesitate to send a PR or to contribute to this project. If you have suggestion or a problem, feel free to open an issue.
