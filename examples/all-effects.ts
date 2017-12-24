// -- IMPORT --
import { CrudEffects } from './crud/crud.effects';
import { BasicEffects } from './basic/basic.effects';

export const AllEffects = [
    // -- LIST --
	CrudEffects,
    BasicEffects
]