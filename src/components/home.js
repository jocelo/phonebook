import React from 'react';

import NewContact from './add-new';
import EmergencyContact from './emergency';
import ContactList from './contacts'

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Phonebook</h1>
				<hr />
				<NewContact></NewContact>
				<hr />
				<EmergencyContact></EmergencyContact>
				<hr />
				<ContactList></ContactList>
			</div>
		)
	}
}

export default Home;