import { useState } from "react";

type UploadState = {
  isUploading: boolean;
  error: string | null;
  progress: number;
};

export default function useUploadImage(): [
  (file: File) => Promise<string>,
  UploadState
] {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const uploadImage = async (file: File): Promise<string> => {
    setIsUploading(true);
    setError(null);
    setProgress(0);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "uploadImage");
      
      // Add chunked upload for large files (videos)
      const isVideo = file.type.startsWith('video/');
      if (isVideo && file.size > 10 * 1024 * 1024) { // 10MB threshold
        formData.append("chunk_size", "6000000"); // 6MB chunks
      }

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dkkuddfuv/auto/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const data = await res.json();
      setProgress(100);

      return data.secure_url;
    } catch (err) {
      setError("حدث خطأ أثناء رفع الملف");
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  return [uploadImage, { isUploading, error, progress }];
}
