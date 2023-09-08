import { supabase } from "../../../../setup/supabase";
import React, { useState } from "react";

interface UploadFormProps {
  setUploadedFile: (fileUrl: string) => void;
}

const UploadEventForm: React.FC<UploadFormProps> = ({ setUploadedFile }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      try {
        const filePath = Date.now() + "-" + file.name;

        const { data, error } = await supabase.storage
          .from("events")
          .upload(filePath, file);

        if (error) {
          console.error("Error uploading file:", error);
        } else {
          const fileKey = data!.path || "";
          setUploadedFile(fileKey); // Utilisez la fonction de rappel pour transmettre l'URL à EventForm
          setUploadedImage(fileKey);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {/* Utilisez uploadedImage au lieu de eventImage */}
    </div>
  );
};

export default UploadEventForm;
