import React from 'react';
import { connect } from 'react-redux';
import { addNewContact, apiRequest } from '../actions/contacts';

import './css/add-new.css';

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
    this.getApiData = this.getApiData.bind(this);
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
    if (this.state.contactName.length === 0 || this.state.contactPhone.length === 0) {
      return;
    }
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
        <div className="add-form">
          <input type="text" 
            name="contactName" 
            placeholder="Contact Name"
            onChange={event=>this.handleFieldChange(event)} value={this.state.contactName} />
          <input type="text" 
            name="contactPhone" 
            placeholder="Contact Phone"
            onChange={event=>this.handleFieldChange(event)} value={this.state.contactPhone} />
          <input type="text" 
            name="contactEmail" 
            placeholder="Contact Email"
            onChange={event=>this.handleFieldChange(event)} value={this.state.contactEmail} />
          <br />
          <button type="button" onClick={this.handleSubmitForm}>Save Contact</button>
          <button type="button" onClick={this.handleCancel}>Cancel</button>
        </div>
      )
    }
  }

  getApiData() {
    this.props.getApiData();
  }

  render() {
    return (
      <div>
        { !this.state.showForm && 
          <div>
        <button type="button" onClick={this.handleToggleAddForm}>Add Contact</button>
        <button onClick={this.getApiData} className='header-line'>Load data from server</button>
        </div>
        }
        {this.renderForm()}
      </div>
    )
  }
}

const mapActionsToProps = {
  submit: addNewContact,
  getApiData: apiRequest
}

export default connect(null, mapActionsToProps)(NewContact);