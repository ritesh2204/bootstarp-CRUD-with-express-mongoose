import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      mobile: ''
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(
      `The values are ${this.state.name}, ${this.state.email}, and ${this.state.mobile}`
    );
    this.setState({
      name: '',
      email: '',
      mobile: ''
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <h3>Add New Contact</h3>

          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter name'
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>E-mail</label>
            <input
              type='text'
              className='form-control'
              placeholder='Password'
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Mobile</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter mobile'
              value={this.state.mobile}
              onChange={this.onChangeMobile}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Create;
