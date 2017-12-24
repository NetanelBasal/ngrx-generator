module.exports = {
    /*
    * Create file index.ts if doesn't exist
    */
  addIndex: [{
    type: "add",
    path: "{{ basePath }}/app.store.ts",
    templateFile: './templates/_app.store.ts'
  }],
  
  /*
  * Modify index.ts with new generated files
  */
  updateIndex: [{
    type: "update app.store",
    path: "{{ basePath }}/app.store.ts"
  }],
  
  /*
  * Create file all-effects.ts if doesn't exist
  */ 
  addAllEffects: [{
    type: 'add',
    path: '{{ basePath }}/all-effects.ts',
    templateFile: './templates/_all-effects.ts'
  }],
  
  /*
   * Modify all-effects.ts with new effect generated
   */
   updateAllEffects: [{
     type: 'update all-effects',
     path: '{{ basePath }}/all-effects.ts'
   }],
  
  /*
  * Create store-reduxor.module.ts if doesn't exist
  */
  addStoreReduxorModule: [{
    type: 'add',
    path: '{{ basePath }}/store-reduxor.module.ts',
    templateFile: './templates/_store-reduxor.module.ts'
  }],
  
  /*
  * Modify store-reduxor.module.ts with new generated files
  */
  updateStoreReduxorModule: [{
    type: 'update store-reduxor',
    path: '{{ basePath }}/store-reduxor.module.ts'
  }]
}