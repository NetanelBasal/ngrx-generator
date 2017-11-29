# ngx-reduxor

## Intro
Initially created by Netanel Basal (called ngrx-generator), I forked it to update it to my needs. But after some times, 
and using the recommendations of the community, the generator has been improved. 

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
ngx-reduxor
```

And then, follow the instructions... ;-)

## Import to your Angular app
The first time you launch the generator, it creates an index file. This index regroups all the reducers created, and you can also use this file to create some metaReducer, like a logger (for debugging purpose). 
After that, in your AppModule, you just need to import it and it will work as expected

```
...
import { reducers, metaReducers } from './path/to/your/index';
...
@NgModule({
...
imports: [
  ...
  StoreModule.forRoot(reducers, { metaReducers }),
  ...
]
...
```

## Issues/Improvements
Don't hesitate to send a PR or to contribute to this project. If you have suggestion or a problem, feel free to open an issue.
