import React, { useState, useEffect } from "react";
import axios from "axios";
import { GroupType } from "../../../setup/types/group/group.type";
import "./groupList.css";

const GroupList: React.FC = () => {
  const [groupData, setGroupData] = useState<GroupType[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [showAllGroups, setShowAllGroups] = useState<boolean>(false);

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
        `${process.env.REACT_APP_API_URL}/groupes`
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
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/users/${userId}/group/${groupId}`
      );

      // Mise à jour des données du groupe après avoir rejoint
      fetchGroupData();
    } catch (error) {
      console.error("Error joining group:", error);
    }
  };

  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, 7);
    let truncatedDescription = truncatedWords.join(" ");
    if (words.length > 7) {
      truncatedDescription += " ...";
    }
    return truncatedDescription;
  };

  const toggleShowAllGroups = () => {
    setShowAllGroups(!showAllGroups);
  };

  return (
    <div>
      {groupData.slice(0, showAllGroups ? groupData.length : 2).map((group) => (
        <div key={group.id} className="group-card">
          <div className="group-img">
            <img src={group.cover} alt="" />
          </div>
          <div className="group-infos-content">
            <div className="group-infos-name">{group.name}</div>
            {/* <div className="group-members">Members: {group.users.length}</div> */}
            <div className="group-infos-description">
              {truncateDescription(group.description)}
            </div>
          </div>
          <button className="btn-joingroup" onClick={() => joinGroup(group.id)}>
            Rejoindre
          </button>
        </div>
      ))}
      {groupData.length > 2 && (
        <div className="show-all-groups">
          <button onClick={toggleShowAllGroups}>
            {showAllGroups ? "Cacher les groupes" : "Voir tous"}
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupList;
