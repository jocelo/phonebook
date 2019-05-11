import React from 'react';

class ContactList extends React.Component {
	render() {
		return (
			<div>
				<h3>Contacts</h3>

				<div>
					<h4>_____ A _____</h4>
					<div>
					<p> <strong>Alfredo Alonso</strong> (847) 123 1234 </p>
					<p> <strong>Arturo Mendoza</strong> (310) 321 8859 </p>
					</div>
				</div>

				<div>
					<h4>_____ B _____</h4>
					<div>
					<p> <strong>Benito Juarez</strong> (449) 345 9898 </p>
					</div>
				</div>

				<div>
					<h4>_____ F _____</h4>
					<div>
					<p> <strong>Frida Kahlo</strong> (555) 553 5351 </p>
					</div>
				</div>

			</div>
		)
	}
}

export default ContactList;