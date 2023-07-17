import React, { useState, useEffect } from "react";
import axios from "axios";
import { GroupType } from "../../../setup/types/group/group.type";
import "./groupList.scss";
import { useUserContext } from "../../../setup/contexts/UserContext";
import GroupService from "../../../setup/services/group.service";
import { Link } from "react-router-dom";

interface GroupListProps {
  groupData: GroupType[];
  setGroupData: React.Dispatch<React.SetStateAction<GroupType[]>>;
  isSearching: boolean;
}

const GroupList: React.FC<GroupListProps> = ({
  groupData,
  setGroupData,
  isSearching,
}) => {
  const { user } = useUserContext();
  const [reloadData, setReloadData] = useState(false);

  const [userId, setUserId] = useState<string>("");

  const [searchPostalCode, setSearchPostalCode] = useState("");
  const [visibleGroupCount, setVisibleGroupCount] = useState(1);

  useEffect(() => {
    fetchGroupData();
    const user = localStorage.getItem("user");
    if (user) {
      const userObj = JSON.parse(user);
      setUserId(userObj.id);
    }
  }, []);

  const fetchGroupData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/groupes`,
        {
          params: { postalCode: searchPostalCode }, // Ajoutez le code postal en tant que paramètre de requête
        }
      );
      const groups = response.data;
      setGroupData(groups);
    } catch (error) {
      console.error("Error fetching group data:", error);
    }
  };

  const joinGroup = async (groupId: number) => {
    try {
      // Appel à votre service API pour rejoindre le groupe
      if (user) {
        await axios.patch(
          `${process.env.REACT_APP_API_URL}/users/${user.id}/group/${groupId}`
        );
        setReloadData(!reloadData);
      }
    } catch (error) {
      console.error("Error joining group:", error);
    }
  };

  if (reloadData) {
    const reloadGroupData = async () => {
      try {
        await GroupService.reloadData(groupData[0].id);
        setReloadData(false); // Réinitialisez le state reloadData à false après le rechargement des données
      } catch (error) {
        console.error("Error reloading group data:", error);
      }
    };

    reloadGroupData();
  }
  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, 7);
    let truncatedDescription = truncatedWords.join(" ");
    if (words.length > 7) {
      truncatedDescription += " ...";
    }
    return truncatedDescription;
  };

  const handleShowMoreGroups = () => {
    setVisibleGroupCount((prevCount) => prevCount + 1);
  };

  const handleHideGroups = () => {
    setVisibleGroupCount(1);
  };

  const visibleGroupData = groupData.slice(0, visibleGroupCount);
  return (
    <div>
      {isSearching &&
        visibleGroupData.map((group) => (
          <Link
            to={`/groupe/${group.id}`}
            key={group.id}
            className="group-list-card"
          >
            <div className="group-list-img">
              <img src={group.cover} alt="" />
            </div>
            <div className="group-infos-content">
              <div className="group-infos-name">{group.name}</div>
              <div className="group-infos-description">
                {truncateDescription(group.description)}
              </div>
            </div>
            <div className="group-infos-bouton">
              <button
                className="group-btn-joingroup"
                onClick={() => joinGroup(group.id)}
              >
                Rejoindre
              </button>
            </div>
          </Link>
        ))}
      {isSearching && visibleGroupCount < groupData.length && (
        <div className="show-more-groups">
          <button onClick={handleShowMoreGroups}>Voir plus de groupes</button>
        </div>
      )}
      {isSearching && visibleGroupCount > 1 && (
        <div className="hide-groups">
          <button onClick={handleHideGroups}>Cacher les groupes</button>
        </div>
      )}
    </div>
  );
};

export default GroupList;
