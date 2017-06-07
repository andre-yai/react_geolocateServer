import expect from 'expect';
import * as placesActions from './placesActions';
import * as types from './actionTypes';
import * as API from './../api/geolocation';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions',() => {
      it('Should associate CREATE_PLACE with place', () => {
        //arrange
        const place = {name:"globo.com"};
        const expected = {
          type: types.CREATE_PLACE,
          place: place
        };
        const action = placesActions.associatePlacesTypes(place,types.CREATE_PLACE);
        expect(action.type).toEqual(expected.type);
        expect(action).toEqual(expected);
      });
      it('Should return a object to DELETE_PLACE refering to MYPLACE', () => {
        const expected = {
          type: types.DELETE_PLACE,
          place: {name:"My Location"}
        };
        const action = placesActions.deleteMyPlace();
        expect(action.type).toEqual(expected.type);
        expect(action).toEqual(expected);
      });
});
describe("Test API",() => {
  it("test the api call",(done) =>{
    let placeName = "globo.com";
    const expected = {
      city: "Rio de Janeiro",
      lat: -22.8864,
      lng:-43.2037
    };
    API.geolocation(placeName)
      .then((placeAPI) => {
        expected(placeAPI.city).toEqual(expected.city);
        expected(placeAPI.lat).toEqual(expected.lat);
        expected(placeAPI.lng).toEqual(expected.lng);
        done();
      })
      .catch((error) => {
        console.log("Error on Internet connection!!");
        done();
      });
  });
});
