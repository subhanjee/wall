import { Form, Input, Button, Checkbox } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom";
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
        <p className="logtext">Email*</p>
        <Input
          style={{ width: "387px", height: "50px", borderRadius: "32.5px" }}
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
        <p className="logtext">Password*</p>
        <Input
          style={{ width: "387px", height: "50px", borderRadius: "32.5px" }}
          //   prefix={<LockOutlined className="site-form-item-icon" />}

          type="password"
          placeholder="min. 8 characters"
        />
      </Form.Item>
      <Form.Item >
        <Form.Item name="remember" valuePropName="checked" noStyle>
         
            <Checkbox> Remember me </Checkbox>
       
        </Form.Item>

      <Link>  
         Forgot password
         </Link>
      </Form.Item>

      <Form.Item>
     
        <Button
          style={{ backgroundColor: "#FF7906" }}
          className="logbutton"
          htmlType="submit"

        >
          <p className="log4">Sign in</p>
        </Button>
        
        <p className="log5">
          Not registered yet?   <Link to="/signup">Create An Account</Link>
        </p>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
