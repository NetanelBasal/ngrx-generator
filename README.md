# ngrx-generator

![Downloads](https://img.shields.io/npm/dm/ngrx-generator.svg)
![Downloads](https://img.shields.io/npm/dt/ngrx-generator.svg)
![npm version](https://img.shields.io/npm/v/ngrx-generator.svg)
![License](https://img.shields.io/npm/l/ngrx-generator.svg)

[demo.gif](https://postimg.org/image/ra0l6py2l/)


## Getting Started

Install it via npm:

```shell
npm install ngrx-generator -g
```

```shell
ngrx-gen
```

By default it will create the templates in the current directory.
If you prefer the ngrx/example style -
```shell
- reducers
- services
- actions
- effects
- services
```

you can add the following line to your `package.json`
```shell
{
 "ngrxGen": {
   "seperateDirectory": "true"
 }
}
```

## License

MIT
