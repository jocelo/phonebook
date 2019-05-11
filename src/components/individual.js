import React from 'react';

class IndividualContact extends React.Component {
	
	constructor(props) {
		super(props);

		this.markAsEmergency = this.markAsEmergency.bind(this);
	}

	markAsEmergency() {
		this.props.setEmergencyContact(this.props.id, this.props.letter);
	}

	render() {
		return (
			<div>
				<p> 
					<strong>{this.props.name}</strong> {this.props.phone} <button onClick={this.markAsEmergency}>Set Emergency</button>
				</p> 
			</div>
		)
	}
}

export default IndividualContact;