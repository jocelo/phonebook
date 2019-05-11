import React from 'react';

class NewContact extends React.Component {
	render() {
		return (
			<div>
				Contact Name:<input type="text" name="contactname" />
				Phone: <input type="text" name="contactphone" />
				<button type="button">Add Contact</button>
			</div>
		)
	}
}

export default NewContact;