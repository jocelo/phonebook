import React from 'react';

class IndividualContact extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p> <strong>{this.props.name}</strong> {this.props.phone} </p>
			</div>
		)
	}
}

export default IndividualContact;