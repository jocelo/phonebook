import React from 'react';

import NewContact from './add-new';
import EmergencyContact from './emergency';
import ContactList from './contacts'

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contacts: [{
				letter: 'A',
				list: [
					{id: 1, name: 'Alfredo Alonso', phone: '(847) 123 1234'},
					{id: 2, name: 'Arturo Mendoza', phone: '(310) 321 8859'}
			]},{
				letter: 'B',
				list: [
					{id: 1, name: 'Benito Juarez', phone: '(449) 345 9898'}
			]},{
				letter: 'F',
				list: [
					{id: 1, name: 'Frida Kahlo', phone: '(555) 553 5351'}
			]}
		],
		emergency: {
			name: 'Alfredo Alonso',
			phone: '(847) 123 1234'
		}};

		this.handleSaveContact = this.handleSaveContact.bind(this);
	}

	handleSaveContact(contactName, contactPhone) {
		const initialLetter = contactName.substr(0,1).toUpperCase(),
			contacts = this.state.contacts;
		let recordFound = contacts.filter(record=>record.letter === initialLetter);
		
		if (recordFound.length === 1) {
			recordFound = recordFound[0];
		} else {
			const newLength = contacts.push({
				letter: initialLetter,
				list: []
			})
			recordFound = contacts[newLength-1];
		}

		recordFound.list.push({
			id: recordFound.list.length + 1,
			name: contactName,
			phone: contactPhone
		})

		this.setState({contacts: contacts});
	}

	render() {
		return (
			<div>
				<h1>Phonebook</h1>
				<hr />
				<NewContact saveNewContact={this.handleSaveContact}></NewContact>
				<hr />
				<EmergencyContact contact={this.state.emergency}></EmergencyContact>
				<hr />
				<ContactList listOfContacts={this.state.contacts}></ContactList>
			</div>
		)
	}
}

export default Home;