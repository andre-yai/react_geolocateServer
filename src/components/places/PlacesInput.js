import React, {Component,PropTypes} from 'react';
import Map from './Map';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlacesList from './PlacesList';
import * as placesActions from './../../actions/placesActions.js';
import {Button, Col, Grid, Row, HelpBlock, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import toastr from 'toastr';

function isURL(str){
  let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);
  return str.length < 2083 && regex.test(str);
}

class PlacesInput extends Component {
  constructor(props, context) {
    super(props,context);

    this.state = {
      place : { name: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickSaveMyPlace = this.onClickSaveMyPlace.bind(this);
    this.onClickEraseMyPlace = this.onClickEraseMyPlace.bind(this);
    this.redirectSucess = this.redirectSucess.bind(this);
    this.redirectFailed = this.redirectFailed.bind(this);
  }
  onTitleChange(event) {
    const place = this.state.place;
    place.name = event.target.value;
    this.setState({place: place});
  }
  onClickSave(event) {
    event.preventDefault();
    if(isURL(this.state.place.name)){
      this.props.actions.createPlace(this.state.place)
          .then(() => this.redirectSucess())
          .catch(error => this.redirectFailed(error));
    }
  }
  redirectFailed(error){
    toastr.error(error);
  }
  redirectSucess(){
    toastr.success('Location Added!');
  }
  getValidationURLState() {
    const placeName = this.state.place.name;
    if (isURL(placeName)) return 'success';
    else return 'warning';
  }
  onClickSaveMyPlace(event){
    this.props.actions.createMyPlace()
        .then(() => this.redirectSucess())
        .catch(error => this.redirectFailed(error));
  }
  onClickEraseMyPlace(event){
    this.props.actions.deleteMyPlace();
  }
  render(){
    return (
        <div className="container">
          <Grid>
              <Row>
              <Col sm={6} md={4}>
              <FormGroup controlId="formBasicText" validationState={this.getValidationURLState()} >
                <ControlLabel>Insert a URL to Locate</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.place.name}
                  placeholder="Enter text"
                  onChange={this.onTitleChange}
                />
                <Button bsStyle="default" value="Save" onClick={this.onClickSave} > Send </Button>
              <FormControl.Feedback />
              <HelpBlock>Validation for URL format.</HelpBlock>
            </FormGroup>
              <Button bsStyle="success" onClick={this.onClickSaveMyPlace}> LocateMe </Button>
              <Button bsStyle="danger" onClick={this.onClickEraseMyPlace}>Erase Me </Button>
              </Col>
            </Row>
          </Grid>
        </div>
      );
  }
}
PlacesInput.propTypes = {
  actions: PropTypes.object.isRequired,
  places: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps) {
  return {
    places: state.places
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(placesActions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(PlacesInput);
