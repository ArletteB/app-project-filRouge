import React, { useState, useEffect } from "react";
import "./groupCard.css";
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
    <div>
      {/* {groupData.map((group) => ( */}
      <div key={groupes.id} className="card-group-content">
        <div className="group-img">
          <img src={groupes.cover} alt="" />
        </div>
        <div className="group-name">{groupes.name}</div>
        {/* <div className="group-member">Members: {group.users.length}</div> */}
        <button onClick={() => joinGroup(groupes.id)}>Join Group</button>
      </div>
      {/* ))} */}
    </div>
  );
};

export default GroupCard;
