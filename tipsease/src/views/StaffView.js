import React from "react"
import { connect } from "react-redux"

import { getStaff } from "../store/actions"

import Staff from "../Components/Staff/Staff"

class StaffView extends React.Component {

  componentDidMount() {
    if (this.props.staff.length === 0) {
      this.props.getStaff();
    }
  }

  render() {
    return (
      <Staff staff={this.props.staff} history={this.props.history} match={this.props.match} />
    )
  }
}

const mapStateToProps = state => ({
  staff: state.staff
})

export default connect(
  mapStateToProps,
  { getStaff }
)(StaffView);