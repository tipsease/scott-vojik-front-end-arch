import React from "react"
import { connect } from "react-redux"

import RegisterForm from '../Components/RegisterForm/RegisterForm'
import { addStaff } from '../store/actions'

class FormView extends React.Component {

  state ={
    staff: {
      first_name: '',
      tagline: '',
      photo_url: '',
      company: ''
    },
    isEditing: false,
  }

  changeHandler = ev => {
    this.setState ({
      staff: {
        ...this.state.staff,
        [ev.target.name]: ev.target.value
      }
    });
  };

  addNewStaff = () => {
    this.props.addStaff(this.state.staff);
  }  

  render() {
    return (
      <RegisterForm Form addNewStaff={this.addNewStaff} changeHandler={this.changeHandler} staff={this.state.staff} />
    )
  }

}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addStaff }
)(FormView);