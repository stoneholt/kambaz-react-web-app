import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const enrollUserInCourse = async (courseId: any, userId: any) => {
    const response = await axios.post(`${ENROLLMENTS_API}/${courseId}/${userId}`);
    return response.data;
};
export const unenrollUserFromCourse = async (courseId: any, userId: any) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${courseId}/${userId}`);
    return response.data;
};
