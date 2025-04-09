import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {
        links.map((link: any) => (
          <div>
            <Link to={`/Kambaz/Account/${link}`} id="wd-account-signin-link" className={`nav-link ${pathname.includes(link) ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}`}> {link}  </Link> <br/>
            {currentUser && currentUser.role === "ADMIN" && (
              <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
          </div>
        ))
      }
    </div>
);}
