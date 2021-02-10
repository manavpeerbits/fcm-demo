import React, { Component } from "react";

class App extends Component {
  state = {
    data: undefined,
  };

  componentDidMount() {
    this.fetchSampleData();
  }

  fetchSampleData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    // fetch("https://admin.leafgas.com/web/v1/user/productlist", {
    //   body: JSON.stringify({
    //     new_purchase_type: "C",
    //     start: 0,
    //     limit: 10,
    //   }),
    //   method: "POST",
    //   headers: {
    //     Authorization: "Bearer XMfYro5Ar9EXK5XF0l09cyzrrnqI3SbG",
    //     "Content-Type": "Application/json",
    //   },
    //   mode: "cors",
    // })
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  render() {
    return (
      <div>
        <h1>Apple Safari Api Request Test</h1>
      </div>
    );
  }
}

export default App;

// import React from "react";
// import { messaging } from "./init-fcm";
// import { compose, lifecycle, withHandlers, withState } from "recompose";

// const renderNotification = (notification, i) => {
//   console.log(notification);
//   return <li key={i}>{notification}</li>;
// };

// const registerPushListener = (pushNotification) =>
//   navigator.serviceWorker.addEventListener("message", (props) => {
//     console.log(props);
//     let data = props.data;
//     pushNotification(
//       data.data
//         ? data.data.message
//         : data["firebase-messaging-msg-data"].data.title
//     );
//   });

// const App = ({ token, notifications }) => (
//   <>
//     <h1>React + Firebase Cloud Messaging (Push Notifications)</h1>
//     <div>
//       Current token is: <p>{token}</p>
//     </div>
//     <ul>
//       Notifications List:
//       {notifications.map(renderNotification)}
//     </ul>
//   </>
// );

// export default compose(
//   withState("token", "setToken", ""),
//   withState("notifications", "setNotifications", []),
//   withHandlers({
//     pushNotification: ({ setNotifications, notifications }) => (
//       newNotification
//     ) => setNotifications(notifications.concat(newNotification)),
//   }),
//   lifecycle({
//     async componentDidMount() {
//       const { pushNotification, setToken } = this.props;

//       messaging
//         .requestPermission()
//         .then(async function () {
//           const token = await messaging.getToken();
//           console.log("FCM_TOKEN", token);
//           setToken(token);
//         })
//         .catch(function (err) {
//           console.log("Unable to get permission to notify.", err);
//         });

//       registerPushListener(pushNotification);
//     },
//   })
// )(App);
