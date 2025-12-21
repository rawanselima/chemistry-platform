import type { lectures } from "@/typs";
import { API } from "./API";

export async function getLectures(courseId: string | undefined) {
  try {
    const response = await fetch(`${API}/lectures?courseId=${courseId}`);
    if (!response.ok) throw new Error("failed to fetch lectures");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function detailsLecture(lectureId: string | number | undefined) {
  try {
    const response = await fetch(`${API}/lectures/${lectureId}`);
    if (!response.ok) throw new Error("failed to fetch details lecture");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteLecture(lectureId: string | number | undefined) {
  if (!lectureId) return;
  console.log(lectureId);
  try {
    const response = await fetch(`${API}/lectures/${String(lectureId)}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("failed to delete lecture");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addLecture(newLecture: lectures) {
  if (!newLecture) return;

  try {
    const response = await fetch(`${API}/lectures`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLecture),
    });
    if (!response.ok) throw new Error("failed to add lecture");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function EditLecture({
  lectureId,
  newLecture,
}: {
  lectureId: string | number | undefined;
  newLecture: lectures;
}) {
  if (!newLecture || !lectureId) return;

  console.log(newLecture);

  try {
    const response = await fetch(`${API}/lectures/${lectureId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLecture),
    });
    if (!response.ok) throw new Error("failed to edit lecture");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
