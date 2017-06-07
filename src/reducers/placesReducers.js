import * as types from './../actions/actionTypes';
export default function  placesReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_PLACE:
        return [...state,
          Object.assign({},action.place)];
    case types.DELETE_PLACE:
        return[...state.filter(place => place.name !== action.place.name)];
    default:
      return state;
  }
}
