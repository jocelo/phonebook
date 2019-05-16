import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './css/emergency.css';

class EmergencyContact extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon="first-aid" className="animate-emergency" /> 
          <strong>{this.props.contact.name}</strong> {this.props.contact.phone}
        <FontAwesomeIcon icon="first-aid" className="animate-emergency" />
      </div>
    )
  }
}

export default EmergencyContact;