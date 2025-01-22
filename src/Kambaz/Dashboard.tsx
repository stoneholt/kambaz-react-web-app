import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1010/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/introtocs.jpg" width={200} />
            <div>
              <h5> CS1010 Intro to CS I </h5>
              <p className="wd-dashboard-course-title">
                Become a software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1020/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/introtocs2.jpg" width={200} />
            <div>
              <h5> CS1020 Intro to CS II </h5>
              <p className="wd-dashboard-course-title">
                Become a software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2010/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/introtoai.jpg" width={200} />
            <div>
              <h5> CS2010 Intro to AI I </h5>
              <p className="wd-dashboard-course-title">
                Become an AI developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2020/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/introtoai2.jpg" width={200} />
            <div>
              <h5> CS2020 Intro to AI II </h5>
              <p className="wd-dashboard-course-title">
                Become an AI developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3010/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/introtoml.jpg" width={200} />
            <div>
              <h5> CS3010 Intro to ML I </h5>
              <p className="wd-dashboard-course-title">
                Become an ML developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3020/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/introtoml2.jpg" width={200} />
            <div>
              <h5> CS3020 Intro to ML II </h5>
              <p className="wd-dashboard-course-title">
                Become an ML developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
