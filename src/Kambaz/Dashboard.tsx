import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, addCourse, updateCourse } from "./Courses/reducer";
import { useEffect, useState } from "react";
import { addEnrollment, deleteEnrollment } from "./Courses/Enrollments/reducer";
import * as userClient from "./Account/client";


export default function Dashboard() {
  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  // const { courses } = useSelector((state: any) => state.courseReducer);
  const [showCourses, setShowCourses] = useState(true);
  const [newCourse, setNewCourse] = useState({_id: "", name: "", description: ""})

  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);


  const update_values = (e: any) => {
    const { field, value } = e.target;
    setNewCourse(prevState => ({
      ...prevState,
      [field]: value
    }))
  }
  const editing = (c_id: any, c_name: any, c_description: any) => {
    setNewCourse({
      _id: c_id,
      name: c_name,
      description: c_description,
    })
  }
  if (currentUser.role === "FACULTY") {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => {
                      console.log(newCourse);
                      dispatch(addCourse(newCourse));
                      editing("","","");}} > Add </button>
            <button className="btn btn-warning float-end me-2"
                  onClick={() => {
                    console.log(newCourse);
                    dispatch(updateCourse(newCourse));
                    }} id="wd-update-course-click">
                    Update </button>
        </h5><br />
        <Form.Control defaultValue={newCourse.name} className="mb-2" 
          onChange={update_values} />
        <Form.Control as="textarea" defaultValue={newCourse.description} rows={3}
          onChange={update_values} />
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {courses
              .map((course: any) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description} </Card.Text>
                      <Button variant="primary"> Go </Button>
                      <Button onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                      </Button>
                      <Button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          editing(course._id, course.name, course.description)
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </Button>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>);
  }
  else {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr /><br />
        <Button style={{color: "blue"}} onClick={() => setShowCourses(!showCourses)}>Enrollments</Button>
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {showCourses ? 
              courses
                // .filter((course: any) =>
                //   enrollments.some(
                //     (enrollment: any) =>
                //       enrollment.user === currentUser._id &&
                //       enrollment.course === course._id
                //     ))        
                .map((course: any) => (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card>
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                      <Card.Body className="card-body">
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name} </Card.Title>
                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                          {course.description} </Card.Text>
                        <Button variant="primary"> Go </Button>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              )) :
              courses
                .map((course: any) => (
                  <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                      <Link to={`/Kambaz/Courses/${course._id}/Home`}
                            className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                        <Card.Body className="card-body">
                          <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                            {course.name} </Card.Title>
                          <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                            {course.description} </Card.Text>
                            {enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id) ? 
                            <Button variant="danger" onClick={(e) => {
                              e.preventDefault();
                              dispatch(deleteEnrollment(() => ({user: currentUser, course: course._id})));
                            }} > Unenroll </Button>
                            : 
                            <Button variant="success" onClick={(e) => {
                              e.preventDefault();
                              dispatch(addEnrollment(() => ({user: currentUser, course: course._id})));
                            }} > Enroll </Button>
                            }
                        </Card.Body>
                      </Link>
                    </Card>
                  </Col>
              ))}
          </Row>
        </div>
      </div>);
  }
}
