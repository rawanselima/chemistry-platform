import { useState } from "react";

type VideoDurationState = {
  isLoading: boolean;
  error: string | null;
};

export default function useVideoDuration(): [
  (file: File) => Promise<{ seconds: number; formatted: string }>,
  VideoDurationState
] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatDuration = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getVideoDuration = async (
    file: File 
  ): Promise<{ seconds: number; formatted: string }> => {
    setIsLoading(true);
    setError(null);

    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.preload = "metadata";

      video.onloadedmetadata = () => {
        URL.revokeObjectURL(video.src);

        const duration = video.duration;

        if (isNaN(duration) || duration === Infinity) {
          setError("تعذر حساب مدة الفيديو");
          setIsLoading(false);
          reject();
          return;
        }

        const formatted = formatDuration(duration);

        setIsLoading(false);
        resolve({ seconds: duration, formatted });
      };

      video.onerror = () => {
        setError("حدث خطأ أثناء قراءة ملف الفيديو");
        setIsLoading(false);
        reject();
      };

      video.src = URL.createObjectURL(file);
    });
  };

  return [getVideoDuration, { isLoading, error }];
}
