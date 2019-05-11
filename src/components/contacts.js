import React from 'react';

import IndividualContact from './individual';

class ContactList extends React.Component {
	constructor(props) {
		super(props);
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
									<IndividualContact key={contact.id} name={contact.name} phone={contact.phone}></IndividualContact>
								)
							})}
						</div>
					)
				})}
			</div>
		)
	}
}

export default ContactList;