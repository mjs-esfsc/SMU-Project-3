//MB: This is now the only page for Login. It needed to import useMutation, LOGIN, auth from utils and JWT.
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import "../components/styles/Header.css";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import ReactDOM from 'react-dom';


function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const mutationResponse = await login({
  //       variables: { email: formState.email, password: formState.password },
  //     });
  //     const token = mutationResponse.data.login.token;
  //     Auth.login(token);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
 
  return (
    <div style={{ marginRight: '400px' }}>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="danger" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );  
  //   <div className="container my-1">
  //     <Link to="/signup">← Go to Signup</Link>

  //     <h2>Login</h2>
  //     <form onSubmit={handleFormSubmit}>
  //       <div className="flex-row space-between my-2">
  //         <label htmlFor="email">Email address:</label>
  //         <input
  //           placeholder="youremail@test.com"
  //           name="email"
  //           type="email"
  //           id="email"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="flex-row space-between my-2">
  //         <label htmlFor="pwd">Password:</label>
  //         <input
  //           placeholder="******"
  //           name="password"
  //           type="password"
  //           id="pwd"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       {error ? (
  //         <div>
  //           <p className="error-text">The provided credentials are incorrect</p>
  //         </div>
  //       ) : null}
  //       <div className="flex-row flex-end">
  //         <button type="submit">Submit</button>
  //       </div>
  //     </form>
  //   </div>
  // );

}

export default Login;

// THIS IS WHAT WAS PREVIOUSLY USED
// NOTE BEFORE CHANGES; THIS NEEDS BE REDONE BECAUSE WE USE MUTATIONS, AUTH AND JWT: Here we import a helper function that will check if the email is valid
// import { checkPassword, validateEmail } from "./helpers";
// function Login() {
//   // Create state variables for the fields in the form
//   // We are also setting their initial values to an empty string
//   const [email, setEmail] = useState("");
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and password
//     if (inputType === "email") {
//       setEmail(inputValue);
//     } else if (inputType === "userName") {
//       setUserName(inputValue);
//     } else {
//       setPassword(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email) || !userName) {
//       setErrorMessage("Email or username is invalid");
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     if (!checkPassword(password)) {
//       setErrorMessage(
//         `Choose a more secure password for the account: ${userName}`
//       );
//       return;
//     }
//     alert(`Hello ${userName}`);

//     // If everything goes according to plan, we want to clear out the input after a successful registration.
//     setUserName("");
//     setPassword("");
//     setEmail("");
//   };

//   return (
//     <div>
//       <p>Hello {userName}</p>
//       <form className="form">
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="email"
//         />
//         <input
//           value={userName}
//           name="userName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="username"
//         />
//         <input
//           value={password}
//           name="password"
//           onChange={handleInputChange}
//           type="password"
//           placeholder="Password"
//         />
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;
