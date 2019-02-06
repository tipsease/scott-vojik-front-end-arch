// import React from "react"
// import StaffListView from "../../views/StaffListView";

// const authenticate = HomeView => Login =>
//   class extends React.Component {
//     state = {
//       staffLoggedIn: false,
//       patronLoggedIn: false
//     }
    

//       async componentDidMount() {
//         const endpoint = "https://tipsease-backend.herokuapp.com/api/tippers";
    
//         try {
//           const token = localStorage.getItem('jwt');
//           const requestOptions = {
//             headers: {
//               authorization: token
//             }
//           };
//           const response = await axios.get(endpoint, requestOptions);
//           console.log('endpoint', endpoint);
    
//           this.setState({ users: response.data.users });
//         } catch (error) {
//           console.error("we couldn't get those users");
//         }
//       }

//     // componentDidMount() {
//     //   if (localStorage.getItem('sk')) {
//     //     this.setState({ staffLoggedIn: true });
//     //   }
//     //   if (localStorage.getItem('patron')) {
//     //     this.setState({ patronLoggedIn: true })
//     //   }
//     // }

//     render() {
//       if (this.state.staffLoggedIn) {
//         return <HomeView />;
//       } else if (this.state.patronLoggedIn) {
//         return <StaffListView />;
//       }
//       // if (this.state.patronLoggedIn) return <PatronHomeView />
//       return <Login />
//     }
//   }

//   export default authenticate;