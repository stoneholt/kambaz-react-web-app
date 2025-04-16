import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import { useEffect, useState } from "react";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

export default function Dashboard({ courses, currentUser, setCourses } : {courses: any; currentUser: any; setCourses: any;}) {
  const [newCourse, setNewCourse] = useState({_id: "", name: "", number: "", startDate: "", endDate: "", department: "", credits: 0, description: "", author: currentUser._id})
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const fetchCourses = async () => {
    try {
        const allCourses = await courseClient.fetchAllCourses();
        const enrolledCourses = await userClient.findCoursesForUser(
            currentUser._id
        );
        console.log("also here");
        console.log(allCourses);
        console.log("here");
        console.log(enrolledCourses);
        const courses = allCourses.map((course: any) => {
            if (enrolledCourses.find((c: any) => c._id === course._id)) {
                return { ...course, enrolled: true };
            } else {
                return course;
            }
        });
        setCourses(courses);
    } catch (error) {
        console.error(error);
    }
};

  const findCoursesForUser = async () => {
      try {
          const courses = await userClient.findCoursesForUser(
              currentUser._id
          );
          setCourses(courses);
      } catch (error) {
          console.error(error);
      }
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(newCourse);
    setCourses(courses.map((c: any) => {
        if (c._id === newCourse._id) { return newCourse; }
        else { return c; }
    })
  )};

  
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course: any) => course._id !== courseId));
  };

  const addNewCourse = async () => {
    const c_newCourse = await courseClient.createCourse(newCourse);
    setCourses([...courses, c_newCourse]);
  };
 

  const update_values = (e: any) => {
    const { field, value } = e.target;
    setNewCourse(prevState => ({
      ...prevState,
      [field]: value
    }))
  }
  const editing = (c_id: any, c_name: any, c_description: any) => {
    setNewCourse({...newCourse,
      _id: c_id,
      name: c_name,
      description: c_description,
    })
  }

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course: any) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  }; 

  useEffect(() => {
    if (enrolling) {
        fetchCourses();
    } else {
        findCoursesForUser();
    }
    console.log(courses);
  }, [currentUser, enrolling, setCourses]);
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
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4">
            {!enrolling ? 
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
                            {enrolling && (
                              <button onClick={(event) => {
                                        event.preventDefault();
                                        console.log(course);
                                        console.log(course.enrolled);
                                        updateEnrollment(course._id, !course.enrolled);
                                      }}
                                      className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                                {course.enrolled ? "Unenroll" : "Enroll"}
                              </button>
                            )}
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
