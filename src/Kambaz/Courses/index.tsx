import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as courseClient from "./client";

export default function Courses() {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.courseReducer);
  const course = courses.find((c: any) => c._id === cid)
  const { pathname } = useLocation();
  const [users, setUsers] = useState([]);

  const findTheUsers = async () => {
    const course_users = await courseClient.findUsersForCourse(cid as string);
    setUsers(course_users);
  }

  useEffect(() => {
    findTheUsers();
  })
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
          </div>
            <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable users={users} />} />
            </Routes>
          </div>
      </div>
    </div>
  );
}
