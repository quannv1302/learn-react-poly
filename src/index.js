import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// const fname = 'Quan';
// const lname = 'Nguyen';
// const fullname = <h1>Hello, {fname} {lname}</h1>;

// const info = {
//   firstName: "Quan",
//   lastName: "Nguyen",
//   age: 20,
//   status: false
// }

// function formatName(user) {
//   return `${user.firstName} ${user.lastName} - ${user.age} - ${user.status ? "Dang hoc" : "That hoc"}`;
// }

// const getInfo = formatName(info);

// const Component1 = function Welcome() {
//   return <h1>Hello Quan</h1>;
// }

// const ShowName = () => {
//   const info = {
//     firstName: "Quan",
//     lastName: "Nguyen",
//     age: 20,
//     status: true
//   }

//   function formatName(user) {
//     return `${user.firstName} ${user.lastName} - ${user.age} - ${user.status ? "Dang hoc" : "That hoc"}`;
//   }

//   return <h1>{formatName(info)}</h1>;
// };

const data = [
  { id: 1, name: "apple", slug: "apple" },
  { id: 2, name: "samsung", slug: "samsung" },
  { id: 3, name: "oppo", slug: "oppo" },
  { id: 4, name: "nokia", slug: "nokia" },
  { id: 5, name: "xiaomi", slug: "xiaomi" }
];

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
