import React, {Component,PropTypes}  from 'react';
import {Table} from 'react-bootstrap';

class PlacesList extends Component {
    createLocationsRow (place){
			return (
				<tr key={place.query}>
          <td>{place.name}</td>
					<td>{place.query}</td>
          <td>{place.region}</td>
          <td>{place.regionName}</td>
          <td>{place.city}</td>
          <td>{place.timezone}</td>
					<td>{place.lat}</td>
					<td>{place.lon}</td>
				</tr>
			);
		}
    render(){
		return (
			<div>
				<Table responsive>
					<thead>
            <th>Name</th>
            <th>IP</th>
            <th> country </th>
            <th>region</th>
            <th>city</th>
            <th>timezone</th>
						<th> lat </th>
						<th> lon </th>
					</thead>
					<tbody>
						{this.props.places.map(this.createLocationsRow)}
					</tbody>
				</Table>
			</div>
		);
	}
}
PlacesList.propTypes = {
    places: PropTypes.array.isRequired
};

export default PlacesList;
