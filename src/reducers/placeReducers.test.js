import expect from 'expect';
import placesReducers from './placesReducers';
import * as actions from '../actions/placesActions';
import * as types from '../actions/actionTypes';

describe('PLACE Reducer', () => {
  it('should add place when passed CREATE_PLACE', () => {
    // arrange
    const initialState = [
      {name: 'A'},
      {name: 'B'}
    ];

    const place = {name: 'C'};

    const action = actions.associatePlacesTypes(place,types.CREATE_PLACE);

    //act
    const newState = placesReducers(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].name).toEqual('A');
    expect(newState[1].name).toEqual('B');
    expect(newState[2].name).toEqual('C');
  });

  it('should delete place when passed DELETE_PLACE', () => {
    // arrange
    const initialState = [
      {name: 'A'},
      {name: 'B'},
      {name: 'C'}
    ];

    const place = {name: 'B'};
    const action = actions.associatePlacesTypes(place,types.DELETE_PLACE);

    // act
    const newState = placesReducers(initialState, action);
    // assert
    expect(newState.length).toEqual(2);
  });
});
