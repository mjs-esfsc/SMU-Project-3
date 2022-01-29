// Signup is a page with its own url
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  // MB: ADDED address AND phone to function
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        address: formState.address,
        phone: formState.phone,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // on line 35 deleted <Link to="/login">← Go to Login</Link>
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
    const onFinish = (values) => {
      console.log(values);
    };
  
    return (
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  
}

export default Signup;


//     <div className="container my-1">
//       <Link to="/login">← Go to Login</Link>

//       <h2>Signup</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             placeholder="First"
//             name="firstName"
//             type="firstName"
//             id="firstName"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             placeholder="Last"
//             name="lastName"
//             type="lastName"
//             id="lastName"
//             onChange={handleChange}
//           />
//         </div>

//         <div className="flex-row space-between my-2">
//           <label htmlFor="address">Address:</label>
//           <input
//             placeholder="Address"
//             name="address"
//             type="address"
//             id="address"
//             onChange={handleChange}
//           />
//         </div>

//         <div className="flex-row space-between my-2">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             placeholder="Phone"
//             name="phone"
//             type="number"
//             id="phone"
//             onChange={handleChange}
//           />
//         </div>

//         <div className="flex-row space-between my-2">
//           <label htmlFor="email">Email:</label>
//           <input
//             placeholder="youremail@test.com"
//             name="email"
//             type="email"
//             id="email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             placeholder="******"
//             name="password"
//             type="password"
//             id="pwd"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row flex-end">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

