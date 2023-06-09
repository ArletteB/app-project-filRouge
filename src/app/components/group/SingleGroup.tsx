import { useParams } from "react-router-dom";
import GroupCard from "./card/GroupCard";
import { useEffect, useState } from "react";
import GroupService from "../../../setup/services/group.service";
import { GroupType } from "../../../setup/types/group/group.type";

const SingleGroup: React.FC<{}> = () => {
  const { id } = useParams();

  const [oneGroup, setOneGroup] = useState<GroupType>({} as GroupType);

  const fetchOneGroup = async () => {
    try {
      const response = await GroupService.getOne(id);
      setOneGroup({ ...response });
      console.log("fetchOneGroup : ", response);
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };
  useEffect(() => {
    fetchOneGroup();
  }, [id]);

  return (
    <div className="group-list">
      <h1>
        Single Group
        {oneGroup?.id}
      </h1>
      <GroupCard groupes={oneGroup} />
    </div>
  );
};

export default SingleGroup;
