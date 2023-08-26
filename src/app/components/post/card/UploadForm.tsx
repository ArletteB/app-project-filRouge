import React from "react";
import { supabase } from "../../../../setup/supabase";

interface UploadFormProps {
  setUploadedFile: (fileUrl: string) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ setUploadedFile }) => {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      try {
        const { data, error } = await supabase.storage
          .from("post") // Remplacez par votre nom de bucket Supabase
          .upload(file.name, file);

        if (error) {
          console.error("Error uploading file:", error);
        } else {
          const fileKey = data!.path; // Utilisez la clé de fichier renvoyée par Supabase
          setUploadedFile(fileKey);
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
