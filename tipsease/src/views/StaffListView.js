import React from "react"
import { connect } from "react-redux"

import { getStaff } from "../store/actions"

import StaffList from "../Components/StaffList/StaffList"

class StaffListView extends React.Component {

  state = {
    staff: []
  }

  componentDidMount() {
    this.props.getStaff();
  }

  render() {
    return <StaffList history={this.props.history} staff={this.props.staff} />;
  }
}

const mapStateToProps = state => ({
  staff: state.staff
})

export default connect(
  mapStateToProps,
  { getStaff }
)(StaffListView)