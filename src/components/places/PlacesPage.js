import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import Map from './Map';
import PlacesList from './PlacesList';
import PlacesInput from './PlacesInput';
import {Button, Col, Grid, Row, HelpBlock, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class PlacesPage extends Component {
  render(){

    if(this.props.places.length < 1){
      return ( <div> <PlacesInput/></div> );
    }
    else {
      return (
        <div className="container">
          <Grid>
          <PlacesInput/>
            <Row>
            <Col xs={12} md={12} >
              <div style={{height:400,background:'red'}}>
                <Map center={location} markers={this.props.places} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} >
            <PlacesList places={this.props.places}/>
            </Col>
          </Row>
        </Grid>
        </div>
      );
    }
  }
}
PlacesPage.propTypes = {
    places: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps) {
  return {
    places: state.places
  };
}
export default connect(mapStateToProps)(PlacesPage);
