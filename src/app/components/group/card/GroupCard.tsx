import React from "react";
import { useState, useEffect } from "react";
import "./groupCard.css";
import axios from "axios";
import { GroupType } from "../../../../setup/types/group/group.type";

const GroupCard: React.FC = () => {
  const [groupData, setGroupData] = useState<GroupType[]>([]);

  useEffect(() => {
    fetchGroupData();
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

  return (
    <div>
      {groupData.map((group) => (
        <div key={group.id} className="card-group-content">
          <div className="group-img">
            <img src={group.cover} alt="" />
          </div>
          <div className="group-name">{group.name}</div>
          {/* <div className="group-member">Members: {group.users.length}</div> */}
        </div>
      ))}
    </div>
  );
};

export default GroupCard;
