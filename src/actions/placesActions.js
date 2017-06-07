import * as types from './actionTypes';
import * as Api from './../api/geolocation';

export function isURL(str){
  let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);
  return str.length < 2083 && regex.test(str);
}

export function associatePlacesTypes(place,type) {
    if(place.name === ""){
        place.name = "My Location";
        return {type: type, place};
    }
    else return {type: type, place};
}

export function createPlace(place) {
  return function(dispatch) {
    let placeName = place.name;
    return Api.geolocation(placeName)
      .then((placeAPI) => {
        placeAPI.name = placeName;
        dispatch(associatePlacesTypes(placeAPI,types.CREATE_PLACE));
      })
      .catch(error => {
          throw(error);
      });
  };
}

export function createMyPlace() {
  return function(dispatch) {
    let placeName = "";
    return Api.geolocation(placeName)
      .then((placeAPI) => {
        placeAPI.name = placeName;
        dispatch(associatePlacesTypes(placeAPI,types.CREATE_PLACE));
      })
      .catch(error => {
          throw(error);
      });  };
}

export function deleteMyPlace(){
 return associatePlacesTypes({name:""},types.DELETE_PLACE);
}
