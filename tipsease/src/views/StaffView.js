import React from "react"
import { connect } from "react-redux"

import { getStaff, addTip, getTips } from "../store/actions"

import Staff from "../Components/Staff/Staff"

class StaffView extends React.Component {

  state ={
    staff: {
      first_name: '',
      photo_url: '',
      amount: '',
      id: null,
    },
    isEditing: false,
  }

  componentDidMount() {
    if (this.props.staff.length === 0) {
      this.props.getStaff();
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

  addNewTip = (id) => {
    console.log(this.state.staff);
    this.props.addTip(this.state.staff, id);
  }

  render() {
    return (
      <Staff addNewTip={this.addNewTip} tips={this.props.tips} changeHandler={this.changeHandler} stateStaff={this.state.staff} staff={this.props.staff} history={this.props.history} match={this.props.match} />
    )
  }
}

const mapStateToProps = state => ({
  staff: state.staff,
})

export default connect(
  mapStateToProps,
  { getStaff, addTip, getTips }
)(StaffView);