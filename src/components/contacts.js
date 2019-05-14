import React from 'react';
import { connect } from 'react-redux';

import IndividualContact from './individual';

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
        <h3>Contacts</h3>
        {this.props.listOfContacts.map((contactGroup, idx)=>{
          return (
            <div key={idx}>
              <h4>_____ {contactGroup.letter} _____</h4>
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

const MapStateToProps = state => ({
  listOfContacts: state.contacts
})

export default connect(MapStateToProps, null)(ContactList);