import React from 'react'

class EmergencyContact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          Emergency Contact: <strong>{this.props.contact.name}</strong> {this.props.contact.phone}
        </p>
      </div>
    )
  }
}

export default EmergencyContact;