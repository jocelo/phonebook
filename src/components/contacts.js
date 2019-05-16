import React from 'react';
import IndividualContact from './individual';
import './css/contacts.css';

import { connect } from 'react-redux';

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.updateEmergencyContact = this.updateEmergencyContact.bind(this);
  }

  updateEmergencyContact(contactId, letter) {
    this.props.updateEmergencyContactParent(contactId, letter);
  }

  render() {
    return (
      <div>
        {this.props.listOfContacts.map((contactGroup, idx)=>{
          return (
            <div key={idx}>
              <h4>{contactGroup.letter}</h4>
              <hr />
              {contactGroup.list.map(contact=>{
                return (
                  <IndividualContact 
                    key={contact.id}
                    id={contact.id}
                    letter={contactGroup.letter}
                    name={contact.name} 
                    phone={contact.phone}
                    isFavorite={contact.isFavorite}
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

export default connect(null, null)(ContactList);