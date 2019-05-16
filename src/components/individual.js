import React from 'react';

import { connect } from 'react-redux';
import { setEmergencyContact } from '../actions/contacts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/individual.css';

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
      <div className="contact-container">
        <div className="caca2">
          <FontAwesomeIcon icon="user-circle" size="4x" />
          <p>
            <strong>{this.props.name}</strong>
          </p>
          <p>
            <FontAwesomeIcon icon="mobile-alt" />{this.props.phone}
          </p>
          <p>
            <FontAwesomeIcon icon="envelope" />{this.props.email || '-'}
          </p>
          
            <a onClick={this.markAsEmergency} style={{textDecoration: 'underline', cursor: 'pointer'}}>Set Emergency</a>
        </div>
      </div>
    )
  }
}

const mapActionsToProps = {
  markAsEmergency: setEmergencyContact
}

export default connect(null, mapActionsToProps)(IndividualContact);