import React from "react"
import { connect } from "react-redux"

import StaffForm from '../Components/StaffForm/StaffForm'
import { addStaff } from '../store/actions'

class FormView extends React.Component {

  state ={
    staff: {
      name: '',
      description: '',
      imageUrl: '',
    }
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
      <StaffForm Form addNewStaff={this.addNewStaff} changeHandler={this.changeHandler} staff={this.state.staff} />
    )
  }

}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addStaff }
)(FormView);