import type { lectures, videos } from "@/typs";
import { API } from "./API";
import { getVideosByLecture, syncVideosWithLecture } from "./videos";

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
  try {
    // 1. Get all videos related to this lecture
    const relatedVideos = await getVideosByLecture(lectureId);

    // 2. Delete all related videos
    const deleteVideoPromises = relatedVideos.map((video: videos) =>
      fetch(`${API}/videos/${video.id}`, { method: "DELETE" })
    );
    await Promise.all(deleteVideoPromises);

    // 3. Delete the lecture itself
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

  try {
    // 1. Update the lecture
    const response = await fetch(`${API}/lectures/${lectureId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLecture),
    });
    if (!response.ok) throw new Error("failed to edit lecture");
    const data = await response.json();

    // 2. Cascade changes to all videos in this lecture (sync course info)
    await syncVideosWithLecture(lectureId, {
      courseId: newLecture.courseId,
      courseName: newLecture.courseName,
      lectureName: newLecture.lectureName,
      levelName: newLecture.levelName,
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
