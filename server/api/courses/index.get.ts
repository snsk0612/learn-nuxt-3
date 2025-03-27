import { getCourse } from "~/server/models/course"

export default defineEventHandler(() => {
    const courses = getCourse();
    return courses;
});