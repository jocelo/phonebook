import React from 'react'

class EmergencyContact extends React.Component {
  render() {
    return (
      <div>
        Emergency Contact: <strong>{this.props.contact.name}</strong> {this.props.contact.phone}
      </div>
    )
  }
}

export default EmergencyContact;