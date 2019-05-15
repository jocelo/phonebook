import React from 'react';
import IndividualContact from './individual';
import './css/contacts.css';

import { apiRequest } from '../actions/contacts';

import { connect } from 'react-redux';

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.updateEmergencyContact = this.updateEmergencyContact.bind(this);
    this.getApiData = this.getApiData.bind(this);
  }

  updateEmergencyContact(contactId, letter) {
    this.props.updateEmergencyContactParent(contactId, letter);
  }

  getApiData() {
    this.props.getApiData();
  }

  render() {
    return (
      <div>
        <h3>Contacts <a onClick={this.getApiData} className='header-line'>Load data from server</a></h3>
        {this.props.listOfContacts.map((contactGroup, idx)=>{
          return (
            <div key={idx}>
              <h4>_____________ {contactGroup.letter} _____________</h4>
              {contactGroup.list.map(contact=>{
                return (
                  <IndividualContact 
                    key={contact.id}
                    id={contact.id}
                    letter={contactGroup.letter}
                    name={contact.name} 
                    phone={contact.phone}
                    setEmergencyContact={this.updateEmergencyContact} ></IndividualContact>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapActionsToProps = {
  getApiData: apiRequest
}

export default connect(null, mapActionsToProps)(ContactList);