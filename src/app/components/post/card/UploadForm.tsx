import React from "react";
import { supabase } from "../../../../setup/supabase";

interface UploadFormProps {
  setUploadedFile: (fileUrl: string) => void;
  postImage: string;
}

const UploadForm: React.FC<UploadFormProps> = ({
  setUploadedFile,
  postImage,
}) => {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      try {
        const filePath = Date.now() + "-" + file.name;

        const { data, error } = await supabase.storage
          .from("post")
          .upload(filePath, file);

        if (error) {
          console.error("Error uploading file:", error);
        } else {
          const fileKey = data!.path;
          setUploadedFile(fileKey);
          postImage = fileKey;
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default UploadForm;
