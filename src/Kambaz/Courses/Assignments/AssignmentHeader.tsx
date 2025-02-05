import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentHeader () {
    return (
        <div className="float-end text-align-center">
            <span className="position-relative me-2">40% of Total</span>
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );}