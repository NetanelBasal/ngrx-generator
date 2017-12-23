import { reducer } from './basic.reducer';
import * as fromBasic from './basic.reducer';

describe('BasicReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromBasic.initialState);
  });
});

});