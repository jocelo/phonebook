import React from 'react';

import { connect } from 'react-redux';
import { setEmergencyContact } from '../actions/contacts';

class IndividualContact extends React.Component {
  
  constructor(props) {
    super(props);

    this.markAsEmergency = this.markAsEmergency.bind(this);
  }

  markAsEmergency(data) {
    this.props.markAsEmergency({name:this.props.name, phone: this.props.phone});
  }

  render() {
    return (
      <div className="">
        <div className="">
          <strong>{this.props.name}</strong> {this.props.phone} <a onClick={this.markAsEmergency} style={{textDecoration: 'underline', cursor: 'pointer'}}>Set Emergency</a>
        </div>
      </div>
    )
  }
}

const mapActionsToProps = {
  markAsEmergency: setEmergencyContact
}

export default connect(null, mapActionsToProps)(IndividualContact);