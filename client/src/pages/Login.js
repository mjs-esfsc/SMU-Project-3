//MB: This is now the only page for Login. It needed to import useMutation, LOGIN, auth from utils and JWT.
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "../components/styles/Header.css";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import ReactDOM from "react-dom";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const onFinish = (values) => {
  //   console.log('Success:', values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="signButton flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

  //   <div style={{ marginRight: '400px' }}>
  //   <Form
  //     name="basic"
  //     labelCol={{
  //       span: 8,
  //     }}
  //     wrapperCol={{
  //       span: 16,
  //     }}
  //     initialValues={{
  //       remember: true,
  //     }}
  //     onFinish={onFinish}
  //     onFinishFailed={onFinishFailed}
  //     autoComplete="off"
  //   >
  //     <Form.Item
  //       label="Username"
  //       name="username"
  //       rules={[
  //         {
  //           required: true,
  //           message: 'Please input your username!',
  //         },
  //       ]}
  //     >
  //       <Input />
  //     </Form.Item>

  //     <Form.Item
  //       label="Password"
  //       name="password"
  //       rules={[
  //         {
  //           required: true,
  //           message: 'Please input your password!',
  //         },
  //       ]}
  //     >
  //       <Input.Password />
  //     </Form.Item>

  //     <Form.Item
  //       name="remember"
  //       valuePropName="checked"
  //       wrapperCol={{
  //         offset: 8,
  //         span: 16,
  //       }}
  //     >
  //       <Checkbox>Remember me</Checkbox>
  //     </Form.Item>

  //     <Form.Item
  //       wrapperCol={{
  //         offset: 8,
  //         span: 16,
  //       }}
  //     >
  //       <Button type="danger" htmlType="submit">
  //         Submit
  //       </Button>
  //     </Form.Item>
  //   </Form>
  //   </div>
  // );

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
