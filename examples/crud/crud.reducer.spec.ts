import { reducer } from './crud.reducer';
import * as fromCrud from './crud.reducer';

describe('CrudReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromCrud.initialState);
  });
});

});