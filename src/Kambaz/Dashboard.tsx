import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./Courses/Enrollments/reducer";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import * as enrollmentsClient from "./Courses/Enrollments/client";


export default function Dashboard({ courses, currentUser, setCourses, allCourses, setAllCourses, fetchCourses } : {courses: any; currentUser: any; setCourses: any; allCourses: any; setAllCourses: any; fetchCourses: any;}) {
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showCourses, setShowCourses] = useState(true);
  const [newCourse, setNewCourse] = useState({_id: "", name: "", description: ""})

  const updateCourse = async () => {
    await courseClient.updateCourse(newCourse);
    setCourses(courses.map((c: any) => {
        if (c._id === newCourse._id) { return newCourse; }
        else { return c; }
    })
  )};

  
  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((newCourse: any) => newCourse._id !== courseId));
  };

  const addNewCourse = async () => {
    const c_newCourse = await userClient.createCourse(newCourse);
    setCourses([ ...courses, c_newCourse ]);
    setAllCourses([ ...courses, c_newCourse ]);
  };



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

  const fetchEnrollments = async () => {
    const e_enrollments = await userClient.findMyEnrollments();
    dispatch(setEnrollments(e_enrollments));
  };

  const doUnenroll = async (c_id: any) => {
    await enrollmentsClient.unenrollUserFromCourse(c_id, currentUser._id);
    dispatch(deleteEnrollment({user: currentUser, course: c_id}));
    fetchCourses();
    fetchEnrollments();
  };

  const doEnroll = async (c_id: any) => {
    enrollmentsClient.enrollUserInCourse(c_id, currentUser._id);
    dispatch(addEnrollment({user: currentUser, course: c_id}));
    fetchCourses();
    fetchEnrollments();
  };

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
  }, [currentUser, showCourses]);
  if (currentUser.role === "FACULTY") {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => {
                      console.log(newCourse);
                      addNewCourse();
                      editing("","","");}} > Add </button>
            <button className="btn btn-warning float-end me-2"
                  onClick={() => {
                    console.log(newCourse);
                    updateCourse();
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
                            deleteCourse(course._id);
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
              allCourses
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
                            {enrollments.some((enrollment: any) => enrollment.course === course._id) ? 
                            (<Button variant="danger" onClick={(e) => {
                              e.preventDefault();
                              doUnenroll(course._id);
                            }} > Unenroll </Button>)
                            : 
                            (<Button variant="success" onClick={(e) => {
                              e.preventDefault();
                              doEnroll(course._id);
                            }} > Enroll </Button>)
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
