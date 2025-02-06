import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHeader from "./AssignmentHeader";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentControls />
        <br></br>
        <ListGroup className="rounded-0" id="wd-assignment-grouping">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> <FaCaretDown /> ASSIGNMENTS <AssignmentHeader /> </div>
            <ListGroup className="wd-assignments rounded-0 d-flex align-items-center">
              <ListGroup.Item action href="#/Kambaz/Courses/1234/Assignments/1" className="wd-assignment p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen style={{ color: "green" }}/> 
                <div className="flex-grow-1"><b>A1</b> <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts</p></div>
                <AssignmentControlButtons /> 
              </ListGroup.Item>
              <ListGroup.Item action href="#/Kambaz/Courses/1234/Assignments/2" className="wd-assignment p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen style={{ color: "green" }}/> 
                <div className="flex-grow-1"><b>A2</b> <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts</p></div>
                <AssignmentControlButtons /> 
              </ListGroup.Item>
              <ListGroup.Item action href="#/Kambaz/Courses/1234/Assignments/3" className="wd-assignment p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen style={{ color: "green" }}/> 
                <div className="flex-grow-1"><b>A3</b> <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts</p></div>
                <AssignmentControlButtons /> 
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  