import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './app.store';
import { AllEffects } from './all-effects';
import { HttpClientModule } from '@angular/common/http';
// -- IMPORT SERVICES --
import { CrudService } from './crud/crud.service';
import { BasicService } from './basic/basic.service';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([...AllEffects]),
    ],
    exports: [],
    providers: [
        // -- PROVIDERS --
		CrudService,
        BasicService
    ]
})
export class StoreReduxorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StoreReduxorModule
        };
    }
}
