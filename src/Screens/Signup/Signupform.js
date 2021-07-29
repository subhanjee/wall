import { Form, Input, Button, Checkbox } from "antd";
import {Link} from "react-router-dom";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.css";

const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <p className="etext">Name*</p>
        <Input
          style={{ width: "387px", height: "50px", borderRadius: "32.5px",marginTop: "-2%" }}
          //  prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Name"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <p className="etext">Email*</p>
        <Input
          style={{ width: "387px", height: "50px", borderRadius: "32.5px",marginTop: "-2%" }}
          //  prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="mail@website.com"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      > 
        <p className="ptext">Password*</p>
        <Input
          style={{ width: "387px", height: "50px", borderRadius: "32.5px", marginTop: "-2%" }}
          //   prefix={<LockOutlined className="site-form-item-icon" />}

          type="password"
          placeholder="min. 8 characters"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
      <Checkbox> I agree to </Checkbox> 
        </Form.Item>

    <Link>Terms & Conditions</Link>
      </Form.Item>

      <Form.Item>
      <Link to="/otp">
        <Button
          style={{ backgroundColor: "#FF7906" }}
          className="logbutton"
          htmlType="submit"
        >
          <p className="text4">Sign up</p>
        </Button>
        </Link>
        <p className="text5">
          Already have an account? <Link to="/login"> Sign in </Link>
        </p>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
