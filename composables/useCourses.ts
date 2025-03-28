import coursesData from "./coursesData";
import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
  courses: Maybe<CourseWithPath[]>;
}

export const useCourses = async (): Promise<CourseReturn> => {

  const { data, error } = await useFetch<CourseWithPath[]>('/api/courses');

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }
  return {
    courses: data.value,
  };
};