import { useState } from "react";

type UploadState = {
  isUploading: boolean;
  error: string | null;
  progress: number;
};

export default function useUploadVideo(): [
  (file: File) => Promise<string>,
  UploadState
] {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const uploadVideo = async (file: File): Promise<string> => {
    setIsUploading(true);
    setError(null);
    setProgress(0);

    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "uploadImage");
      
      // Enable chunked upload for large files
      if (file.size > 10 * 1024 * 1024) { // 10MB threshold
        formData.append("chunk_size", "6000000"); // 6MB chunks
      }

      const xhr = new XMLHttpRequest();

      // Track upload progress
      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setProgress(percentComplete);
        }
      });

      // Handle successful upload
      xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText);
            setProgress(100);
            setIsUploading(false);
            resolve(data.secure_url);
          } catch (err) {
            setError("فشل في معالجة استجابة الخادم");
            setIsUploading(false);
            reject(err);
          }
        } else {
          setError("فشل رفع الفيديو");
          setIsUploading(false);
          reject(new Error("Upload failed"));
        }
      });

      // Handle errors
      xhr.addEventListener("error", () => {
        setError("حدث خطأ أثناء رفع الفيديو");
        setIsUploading(false);
        reject(new Error("Network error"));
      });

      // Handle abort
      xhr.addEventListener("abort", () => {
        setError("تم إلغاء رفع الفيديو");
        setIsUploading(false);
        reject(new Error("Upload aborted"));
      });

      // Send the request
      xhr.open("POST", "https://api.cloudinary.com/v1_1/dkkuddfuv/video/upload");
      xhr.send(formData);
    });
  };

  return [uploadVideo, { isUploading, error, progress }];
}
