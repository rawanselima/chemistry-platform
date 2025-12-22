import type { videos } from "@/typs";
import { API } from "./API";

export async function getVideos({
  courseId,
  currentPage = 1,
  itemPerPage = 1,
}: {
  courseId: string | number | undefined;
  currentPage: number;
  itemPerPage: number;
}) {
  if (!courseId || !currentPage || !itemPerPage) return;
  try {
    const response = await fetch(
      `${API}/videos?courseId=${courseId}&_page=${currentPage}&_limit=${itemPerPage}`
    );
    if (!response.ok) throw new Error("failed fetch videos");
    const data = await response.json();
    const totalCount = Number(response.headers.get("X-Total-Count"));
    return { data, totalCount };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDetailsVideo(videoId: string | number | undefined) {
  try {
    const response = await fetch(`${API}/videos/${videoId}`);
    if (!response.ok) throw new Error("failed fetch details videos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addVideo(newVideo: videos) {
  if (!newVideo) return;
  try {
    const response = await fetch(`${API}/videos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVideo),
    });
    if (!response.ok) throw new Error("failed add videos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteVideo(videoId: string | number | undefined) {
  if (!videoId) return;
  try {
    const response = await fetch(`${API}/videos/${videoId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("failed delete videos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function editVideo({
  videoId,
  newVideo,
}: {
  videoId: string | number | undefined;
  newVideo: videos;
}) {
  if (!newVideo || !videoId) return;
  try {
    const response = await fetch(`${API}/videos/${videoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVideo),
    });
    if (!response.ok) throw new Error("failed add videos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getVideosByLecture(
  lectureId: string | number | undefined
) {
  if (!lectureId) return [];
  try {
    const response = await fetch(`${API}/videos?lectureId=${lectureId}`);
    if (!response.ok) throw new Error("failed fetch videos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function syncVideosWithLecture(
  lectureId: string | number | undefined,
  updatedData: Partial<videos>
) {
  if (!lectureId) return;
  try {
    const videos = await getVideosByLecture(lectureId);
    const updatePromises = videos.map((video: videos) =>
      fetch(`${API}/videos/${video.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      })
    );
    await Promise.all(updatePromises);
  } catch (error) {
    console.error("Error syncing videos:", error);
  }
}
