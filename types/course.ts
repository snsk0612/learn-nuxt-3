export interface Course {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: number;
  reviewsCount: number;
  studentCount: number;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
}

// export interface CourseWithPath 
//   extends Omit<Course, 'rating' | 'reviewCount' | 'studentCount'> {
//   rating: string;
//   reviewsCount: string;
//   studentCount: string;
//   path: string;
// }

export interface CourseWithPath {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: string;
  reviewsCount: string;
  studentCount: string;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
  path: string;
}

export interface CourseReturn {
  course: Maybe<CourseWithPath>;
  prevCourse: Maybe<CourseWithPath>;
  nextCourse: Maybe<CourseWithPath>;
}