import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    courses: courses,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      const newCourse: any = {
        _id: uuidv4(),
        name: course.name,
      };
      state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (c: any) => c._id !== courseId);
    },
    // updateCourse: (state, { payload: course }) => {
    //   state.courses = state.courses.map((c: any) =>
    //     c._id === course._id ? course : c
    //   ) as any;
    // },
    updateCourse: (state, { payload }) => {
        state.courses = state.courses.map((course) =>
            course._id === payload._id ? payload : course
        );
    },
  },
});
export const { addCourse, deleteCourse, updateCourse } =
    coursesSlice.actions;
export default coursesSlice.reducer;