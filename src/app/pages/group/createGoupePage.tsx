import React from "react";
import CreateGroup from "../../components/group/card/createGroup";
import NavBar from "../../components/ui/Navbar";

const CreateGroupPage: React.FC = () => {
  return (
    <div className="CreateGroupPage">
      {/* Autres composants */}
      <NavBar />
      <CreateGroup />
    </div>
  );
};

export default CreateGroupPage;
