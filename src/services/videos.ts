import type { videos } from "@/typs";
import { API } from "./API";

export async function getVideos(courseId: string | number | undefined) {
  if (!courseId) return;
  try {
    const response = await fetch(`${API}/videos?courseId=${courseId}`);
    if (!response.ok) throw new Error("failed fetch videos");
    const data = await response.json();
    return data;
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

export async function editVideo(
  videoId: string | number | undefined,
  newVideo: videos
) {
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
