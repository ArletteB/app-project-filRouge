import { useParams } from "react-router-dom";
import GroupCard from "./card/GroupCard";
import { useEffect, useState } from "react";
import GroupService from "../../../setup/services/group.service";
import { GroupType } from "../../../setup/types/group/group.type";
import PostGroupCard from "./card/PostGroupCard";
import { Link } from "react-router-dom";

const SingleGroup: React.FC<{}> = () => {
  const { id } = useParams();

  const [oneGroup, setOneGroup] = useState<GroupType>({} as GroupType);

  const fetchOneGroup = async () => {
    try {
      const response = await GroupService.getOne(id);
      setOneGroup({ ...response });
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchOneGroup();
    }
  }, [id]);

  return (
    <div className="single-group ">
      <GroupCard groupes={oneGroup} />
      <Link to={`/groupes/${id}/posts/create`}>
        <button>Ajouter un post</button>
      </Link>

      <PostGroupCard groupId={oneGroup?.id} />
    </div>
  );
};

export default SingleGroup;
