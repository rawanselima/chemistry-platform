import type { courses } from "@/typs";
import { API } from "./API";

interface props {
  currentFilter: string | undefined;
  currentPage: string | undefined;
  itemPerPage: string | undefined;
}

export async function getCourses({
  currentFilter,
  currentPage,
  itemPerPage,
}: props) {
  let url: string = "";

  if (currentFilter !== undefined && currentFilter !== "all")
    url = `${API}/courses?levelId=${currentFilter}&_page=${currentPage}&_limit=${itemPerPage}`;
  else url = `${API}/courses?_page=${currentPage}&_limit=${itemPerPage}`;

  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error("failed fetch courses , please try again");
    const coursesData = await response.json();

    // Fetch all lectures to calculate real counts
    const lecturesResponse = await fetch(`${API}/lectures`);
    if (!lecturesResponse.ok)
      throw new Error("failed fetch lectures , please try again");
    const allLectures = await lecturesResponse.json();

    // Update each course with real lecture count
    const data = coursesData.map((course: courses) => {
      const lectureCount = allLectures.filter(
        (lecture: any) => String(lecture.courseId) === String(course.id)
      ).length;
      return {
        ...course,
        lecturesNumber: `${lectureCount} محاضره`,
      };
    });

    const totalCount = Number(response.headers.get("X-Total-Count"));
    return { data, totalCount };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDetailsCourse(courseId: number | string | undefined) {
  if (!courseId) return;

  try {
    const response = await fetch(`${API}/courses/${courseId}`);
    if (!response.ok)
      throw new Error("failed fetch courses , please try again");
    const courseData = await response.json();

    // Fetch lectures for this course to calculate real count
    const lecturesResponse = await fetch(`${API}/lectures?courseId=${courseId}`);
    if (!lecturesResponse.ok)
      throw new Error("failed fetch lectures , please try again");
    const lectures = await lecturesResponse.json();

    // Update course with real lecture count
    const data = {
      ...courseData,
      lecturesNumber: `${lectures.length} محاضره`,
    };

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addCourse(newCourse: courses) {
  if (!newCourse) return;
  try {
    const response = await fetch(`${API}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });

    if (!response.ok) throw new Error("failed add new course");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteCourse(courseId: string | number | undefined) {
  if (!courseId) return;

  try {
    const response = await fetch(`${API}/courses/${courseId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("failed delete course");
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function editCourse({
  courseId,
  newCourse,
}: {
  courseId: string | number | undefined;
  newCourse: courses;
}) {
  if (!courseId) return;

  try {
    const response = await fetch(`${API}/courses/${courseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });

    if (!response.ok) throw new Error("failed edit course");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
