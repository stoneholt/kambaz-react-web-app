import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { useLocation } from "react-router";
export default function KambazNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-kambaz-navigation" style={{ width: 120 }} 
    className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" className="list-group-item bg-black border-0 text-center"><img src="/images/northeastern.png" width={70}/>Northeastern</a>
      <Link to="/Kambaz/Account" id="wd-account-link" className={`nav-link ${pathname.includes("Account") ? "list-group-item text-center border-0 bg-white text-red" : "list-group-item text-center border-0 bg-black text-white"}`}><FaRegCircleUser className="fs-1 text text-danger" /><br />Account</Link><br/>
      <Link to="/Kambaz/Dashboard" id="wd-dashboard-link" className={`nav-link ${pathname.includes("Dashboard") ? "list-group-item text-black bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}><AiOutlineDashboard className="fs-1 text-danger" /><br />Dashboard</Link>
      <Link to="/Kambaz/Dashboard" id="wd-course-link" className={`nav-link ${pathname.includes("Courses") ? "list-group-item text-black bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}><LiaBookSolid className="fs-1 text-danger" /><br />Courses</Link>
      <Link to="/Kambaz/Calendar" id="wd-calendar-link" className={`nav-link ${pathname.includes("Calendar") ? "list-group-item text-black bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}><IoCalendarOutline className="fs-1 text-danger" /><br />Calendar</Link>
      <Link to="/Kambaz/Inbox" id="wd-inbox-link" className={`nav-link ${pathname.includes("Inbox") ? "list-group-item text-black bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}><FaInbox className="fs-1 text-danger" /><br />Inbox</Link>
      <Link to="/Labs" id="wd-labs-link" className={`nav-link ${pathname.includes("Labs") ? "list-group-item text-black bg-white text-center border-0" : "list-group-item text-white bg-black text-center border-0"}`}><LiaCogSolid className="fs-1 text-danger" /><br />Labs</Link>
    </div>
);}
