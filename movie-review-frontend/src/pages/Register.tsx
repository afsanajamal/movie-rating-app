import React from "react";
import { Card, Form, Input, Button } from "antd";
import Header from "../components/Header";
import { Link } from "react-router-dom";
// import { authenticateUser } from './loginSlice';
// import { useAppDispatch } from '../../hooks';
// import { isAuthenticated } from '../../services/authenticationService';
// import { useHistory } from 'react-router-dom';

export function RegisterPage() {
  // const dispatch = useAppDispatch();
  // let history = useHistory();
  // if (isAuthenticated()) {
  //   history.push('/v1');
  // }

  const onFinish = (values: any) => {
    // dispatch(authenticateUser(values));
  };

  return (
    <div className="">
      <Header />
      <main>
        <div className="w-[400px] block mx-auto mt-[100px]">
          <Card hoverable={true} title="Login" className="login-card">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  className="bg-blue-500"
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
              <Form.Item>
                <p className="text-center">
                  Don't have an account?{" "}
                  <Link to="/register" className="underline text-blue-300">
                    register
                  </Link>
                </p>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </main>
    </div>
  );
}
