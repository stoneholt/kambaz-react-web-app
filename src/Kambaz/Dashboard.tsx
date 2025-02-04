import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1010/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/introtocs.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1010 Intro to CS I</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Become a software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1020/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/introtocs2.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1020 Intro to CS II</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Become a software developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2010/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/introtoai.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS2010 Intro to AI I</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Become an AI developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/2020/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/introtoai2.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS2020 Intro to AI II</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Become an AI developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3010/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/introtoml.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS3010 Intro to ML I</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Become an ML developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/3020/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/introtoml2.jpg" width="100%" height={160}/>
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS3020 Intro to ML II</Card.Title>
                  <Card.Text  className="wd-dashboard-course-description">Become an ML developer</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
);}
