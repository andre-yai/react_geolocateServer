import React, {Component,PropTypes}  from 'react';
import { GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

class Map extends Component {
    render(){
      const mapContainer = <div style={{height:'100%', width:'100%'}}> </div>;
      const center = {lat:13.526171,lng:-17/815837};

      const markers = this.props.markers.map((venue,i) => {

          const marker = {
              position: {
                  lat:venue.lat,
                  lng:venue.lon
              }
          };
          return (<Marker key={i} {...marker} />);
      });
      return (
            <GoogleMapLoader
              containerElement = {mapContainer}
              googleMapElement = {
                <GoogleMap
                  defaultZoom={2}
                  defaultCenter={center}
                  options={{streetVierControl:false, mapTypeControl:false}}>
                  {markers}
                </GoogleMap>

              } />
       );
    }
}
Map.propTypes = {
    markers: PropTypes.array.isRequired
};
export default Map;
