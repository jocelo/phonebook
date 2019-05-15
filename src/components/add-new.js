import React from 'react';
import { connect } from 'react-redux';
import { addNewContact } from '../actions/contacts';

class NewContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      contactName: '',
      contactPhone: ''
    }

    this.handleToggleAddForm = this.handleToggleAddForm.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleToggleAddForm() {
    this.setState({showForm: true});
  }

  handleFieldChange(event) {
    const fieldData = {};
    fieldData[event.target.name] = event.target.value;
    this.setState(fieldData);
  }

  handleSubmitForm() {
    this.props.submit({name: this.state.contactName, phone: this.state.contactPhone});
    this.emptyState();
  }

  handleCancel() {
    this.emptyState();
  }

  emptyState() {
    this.setState({
      showForm: false,
      contactName: '',
      contactPhone: ''
    });
  }
  
  renderForm() {
    if (this.state.showForm) {
      return (
        <div>
          Contact Name:<input type="text" name="contactName" onChange={event=>this.handleFieldChange(event)} value={this.state.contactName} />
          Phone: <input type="text" name="contactPhone" onChange={event=>this.handleFieldChange(event)} value={this.state.contactPhone} />
          <br />
          <button type="button" onClick={this.handleSubmitForm}>Save Contact</button>
          <button type="button" onClick={this.handleCancel}>Cancel</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        { !this.state.showForm && 
        <button type="button" onClick={this.handleToggleAddForm}>Creat new Contact</button>
        }
        {this.renderForm()}
      </div>
    )
  }
}

const mapActionsToProps = {
  submit: addNewContact
}

export default connect(null, mapActionsToProps)(NewContact);