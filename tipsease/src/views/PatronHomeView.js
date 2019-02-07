import React from 'react';
import { connect } from "react-redux"

import Patron from "../Components/Patron/Patron";
import { getPatrons } from "../store/actions/index"

class PatronHomeView extends React.Component {

  state = {
    patrons: [],
  }

  componentDidMount() {
    if (this.props.patrons.length === 0) {
      this.props.getPatrons();
    }
    this.props.getPatrons();
    
  }

  render() {

    return (
      <div>
        <Patron patrons={this.props.patrons}/>
      </div>
    )
  }



}

const mapStateToProps = state => ({
  patrons: state.patrons
})

export default connect(
  mapStateToProps,
  { getPatrons }
)(PatronHomeView)

// export default PatronHomeView