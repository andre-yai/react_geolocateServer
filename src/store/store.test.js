import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import * as placesActions from '../actions/placesActions';
import * as types from '../actions/actionTypes';

describe('Store', function() {
  it('Should handle creating places', function() {
    const store = createStore(rootReducer, {places:[]});
    const place = {
      name: "Globo"
    };

    const action = placesActions.associatePlacesTypes(place,types.CREATE_PLACE);
    store.dispatch(action);

    const actual = store.getState().places[0];
    const expected = {
      name: "Globo"
    };

    expect(actual).toEqual(expected);
  });
});
