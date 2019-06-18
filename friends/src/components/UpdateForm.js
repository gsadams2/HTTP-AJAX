// import React, { Component } from "react";

// export class UpdateForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = this.props.activeFriend || {
//       name: "",
//       age: "",
//       email: ""
//     };
//   }

//   // componentDidUpdate(prevProps) {
//   //   this.setState({
//   //     age: this.props.activeFriend.age,
//   //     name: this.props.activeFriend.name,
//   //     email: this.props.activeFriend.email
//   //   });
//   // }

//   changeHandler = e => {
//     e.persist();
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={this.state.name}
//             onChange={this.changeHandler}
//           />
//           <br />
//           <input
//             type="text"
//             name="age"
//             placeholder="Age"
//             value={this.state.age}
//             onChange={this.changeHandler}
//           />
//           <br />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.changeHandler}
//           />
//           <button
//             onClick={() =>
//               this.props.updateItem(this.props.activeFriend.id, this.state)
//             }
//             type="submit"
//           >
//             Update Friend
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default UpdateForm;
