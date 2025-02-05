import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control defaultValue="alice" placeholder="username" className="wd-username"/>
      <Form.Control defaultValue="123"   placeholder="password" type="password"
             className="wd-password" />
      <Form.Control defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
      <Form.Control defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" />
      <Form.Control defaultValue="2000-01-01" type="date" id="wd-dob" />
      <Form.Control defaultValue="alice@wonderland" type="email" id="wd-email" />
      <Form.Select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </Form.Select>
      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Signout </Link>
    </div>
);}
