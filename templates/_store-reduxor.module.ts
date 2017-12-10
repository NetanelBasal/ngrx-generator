import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './app.store';
import { AllEffects } from './all-effects';
// -- IMPORT SERVICES --
import { {{ properCase name }}Service } from './{{ folder name "services" }}/{{ kebabCase name }}.service';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([...AllEffects]),
    ],
    exports: [],
    providers: [
        // -- PROVIDERS --
        {{ properCase name }}Service
    ]
})
export class StoreReduxorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StoreReduxorModule
        };
    }
}