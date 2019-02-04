import React from "react"
import { connect } from "react-redux"

import StaffForm from '../Components/StaffForm/StaffForm'
import { addStaff, editStaff } from '../store/actions'

class FormView extends React.Component {

  state ={
    staff: {
      name: '',
      description: '',
      imageUrl: '',
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

  editStaff = () => {
    this.setState({ isEditing: true })
    this.props.editStaff(this.state.staff);
  }

  render() {
    return (
      <StaffForm Form addNewStaff={this.addNewStaff} editStaff={this.editStaff} changeHandler={this.changeHandler} staff={this.state.staff} />
    )
  }

}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addStaff, editStaff }
)(FormView);