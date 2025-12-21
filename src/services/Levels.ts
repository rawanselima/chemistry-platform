import type { levels } from "@/typs";
import { API } from "./API";

export async function getLevels() {
  try {
    const response = await fetch(`${API}/levels`);
    if (!response.ok) throw new Error("Failed to fetch levels");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteLevel(levelId: string | number) {
  if (!levelId) return;

  try {
    const response = await fetch(`${API}/levels/${levelId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("failed Delete");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function addLevel(newLevel: levels) {
  if (!newLevel) return;
  try {
    const response = await fetch(`${API}/levels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...newLevel, studentNumber: 0 }),
    });
    if (!response.ok) throw new Error("failed add new level");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function editLevel({
  levelId,
  newLevel,
}: {
  levelId: string | number;
  newLevel: levels;
}) {
  if (!levelId || !newLevel) return;

  try {
    const response = await fetch(`${API}/levels/${levelId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLevel),
    });
    if (!response.ok) throw new Error("failed add new level");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function detailsLevel(
  levelId: string | number | null | undefined
) {
  if (!levelId) return;

  try {
    const response = await fetch(`${API}/levels/${levelId}`);
    if (!response.ok) throw new Error("failed Delete");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
