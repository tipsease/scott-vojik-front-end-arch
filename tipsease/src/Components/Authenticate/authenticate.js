import React from "react"
import StaffListView from "../../views/StaffListView";

const authenticate = HomeView => Login =>
  class extends React.Component {
    state = {
      staffLoggedIn: false,
      patronLoggedIn: false
    }

    componentDidMount() {
      if (localStorage.getItem('sk')) {
        this.setState({ staffLoggedIn: true });
      }
      if (localStorage.getItem('patron')) {
        this.setState({ patronLoggedIn: true })
      }
    }

    render() {
      if (this.state.staffLoggedIn) {
        return <HomeView />;
      } else if (this.state.patronLoggedIn) {
        return <StaffListView />;
      }
      // if (this.state.patronLoggedIn) return <PatronHomeView />
      return <Login />
    }
  }

  export default authenticate;