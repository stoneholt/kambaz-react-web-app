import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to={`/Kambaz/Account/Signin`}  id="wd-account-signin-link" className={`nav-link ${pathname.includes("Signin") ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> Signin  </Link> <br/>
      <Link to={`/Kambaz/Account/Signup`}  id="wd-account-signup-link" className={`nav-link ${pathname.includes("Signup") ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> Signup  </Link> <br/>
      <Link to={`/Kambaz/Account/Profile`} id="wd-account-profile-link" className={`nav-link ${pathname.includes("Profile") ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> Profile </Link> <br/>
    </div>
);}
