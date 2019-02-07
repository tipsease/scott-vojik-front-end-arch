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
    tipData: {
      tipper_id: '',
      tippee_id: '',
      amount: '',
    }
  }

  componentDidMount() {
    if (this.props.staff.length === 0) {
      this.props.getStaff();
    }
    const tipperId = localStorage.getItem("userId");
    this.setState({ tipData: {...this.state.tipData, tippee_id: this.props.match.params.id, tipper_id: tipperId}})

  }

  changeHandler = ev => {
    this.setState({
      staff: {
        ...this.state.staff,
        [ev.target.name]: ev.target.value
      },
      tipData: {
        [ev.target.name]: ev.target.value
      }
    });
  };

  addNewTip = (e, id) => {
    e.preventDefault();
    this.props.addTip(id, this.state.tipData);
  }

  render() {
    return (
      <Staff addNewTip={this.addNewTip} tipData={this.state.tipData} tips={this.props.tips} changeHandler={this.changeHandler} stateStaff={this.state.staff} staff={this.props.staff} history={this.props.history} match={this.props.match} />
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