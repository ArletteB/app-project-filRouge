import React, { useState, useEffect } from "react";
import "./groupCard.scss";
import axios from "axios";
import { GroupType } from "../../../../setup/types/group/group.type";
import { type } from "os";
import exp from "constants";
type Props = {
  groupes: GroupType;
};

const GroupCard = ({ groupes }: Props) => {
  const [groupData, setGroupData] = useState<GroupType[]>([]);
  const [userId, setUserId] = useState<string>("");

  // useEffect(() => {
  //   fetchGroupData();
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     const userObj = JSON.parse(user);
  //     setUserId(userObj.id);
  //   }
  // }, []);

  // const fetchGroupData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/groupes/`
  //     );
  //     const groups = response.data;
  //     setGroupData(groups);
  //   } catch (error) {
  //     console.error("Error fetching group data:", error);
  //   }
  // };

  const joinGroup = async (groupId: number) => {
    try {
      // Appel à votre service API pour rejoindre le groupe
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/users/${userId}/group/${groupId}`
      );

      // Mise à jour des données du groupe après avoir rejoint
      // fetchGroupData();
    } catch (error) {
      console.error("Error joining group:", error);
    }
  };

  return (
    <div id="group-card-content">
      {/* {groupData.map((group) => ( */}
      <div key={groupes.id} id="card-group-content">
        <div className="card-group-image">
          <img src={groupes.cover} alt="" />
        </div>
        <div className="card-group-name">
          <h2 className="card-group-name-title ">{groupes.name}</h2>
          {/* <h4 className="card-group-members">Members: {group.users.length}</h4> */}
          <button onClick={() => joinGroup(groupes.id)}>Join Group</button>
        </div>
      </div>
      <div className="card-group-description-infos">
        <h3 className="card-group-description">{groupes.description}</h3>
      </div>
      {/* ))} */}
    </div>
  );
};

export default GroupCard;
