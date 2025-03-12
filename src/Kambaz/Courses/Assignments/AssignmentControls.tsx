import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import AssignmentEditor from "./Editor";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
export default function AssignmentControls ()
    // { assignmentTitle, setAssignmentTitle, addAssignment }:
    // { assignmentTitle: string, setAssignmentTitle: (title: string) => void; addAssignment: () => void; }) 
    {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { cid } = useParams();
    return (
        <div id="wd-assignment-controls" className="text-nowrap d-flex align-items-center gap-4">
            <InputGroup.Text style={{ width: "400px"}} className="rounded-0 border-grey">
                <FaSearch className="me-2"/>
                <Form.Control id="wd-assignment-search" placeholder="Search..."/>
            </InputGroup.Text >
            <Button variant="secondary" className="flex-end" size="lg"><FaPlus className="position-relative me-2" /> Module</Button>
            <Button variant="danger" className="flex-end" size="lg" href={`#/Kambaz/Courses/${cid}/Assignments/New`}><FaPlus className="position-relative me-2" /> 
                Assignment
            </Button>
            {/* <AssignmentEditor show={show} handleClose={handleClose} dialogTitle="Add Assignment"
                assignmentTitle={assignmentTitle} setAssignmentTitle={setAssignmentTitle} addAssignment={addAssignment} /> */}
        </div>
    );}