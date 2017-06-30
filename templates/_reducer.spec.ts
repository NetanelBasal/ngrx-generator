import { reducer } from '{{position "reducers"}}/{{name}}.reducer';
import * as from{{properCase name}} from '{{position "reducers"}}/{{name}}.reducer';

describe('{{titleCase name}}Reducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(from{{properCase name}}.initialState);
    });
  });

});