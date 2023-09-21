import "./groupCard.scss";
import axios from "axios";
import { GroupType } from "../../../../setup/types/group/group.type";
import { useUserContext } from "../../../../setup/contexts/UserContext";
import { useState, useEffect } from "react";
import GroupService from "../../../../setup/services/group.service";
import UserService from "../../../../setup/services/user.service";
type Props = {
  groupes: GroupType;
};

const GroupCard = ({ groupes }: Props) => {
  const { user } = useUserContext();
  const [reloadData, setReloadData] = useState(false);
  const [isUserMember, setIsUserMember] = useState(false);

  const joinGroup = async (groupId: number) => {
    try {
      // Appel à votre service API pour rejoindre le groupe
      if (user) {
        await axios.patch(
          `${process.env.REACT_APP_API_URL}/users/${user.id}/group/${groupId}`
        );
        setReloadData(true);
      }
    } catch (error) {
      console.error("Error joining group:", error);
    }
  };
  if (reloadData) {
    const reloadGroupData = async () => {
      try {
        await GroupService.reloadData(groupes.id);
        setReloadData(false); // Réinitialisez le state reloadData à false après le rechargement des données
      } catch (error) {
        console.error("Error reloading group data:", error);
      }
    };

    reloadGroupData();
  }
  useEffect(() => {
    // Vérifier si l'utilisateur est déjà membre du groupe lors du chargement initial
    if (user) {
      checkIsUserMember();
    }
  }, [user, groupes.id]);

  const checkIsUserMember = async () => {
    try {
      const response = await UserService.isUserInGroup(user?.id, groupes.id);
      setIsUserMember(response.isUserInGroup);
    } catch (error) {
      console.error("Error checking user membership:", error);
    }
  };

  return (
    <div id="group-card">
      {/* {groupData.map((group) => ( */}
      <div key={groupes.id} className="group-card-content">
        <div className="group-card-image">
          <img src={groupes.cover} alt="" />
        </div>
        <div className="group-card-name">
          <h2 className="group-card-name-title ">{groupes.name}</h2>
          <div>
            {!isUserMember && (
              <button
                className="group-card-btn"
                onClick={() => joinGroup(groupes.id)}
              >
                Join Group
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="group-card-description-infos">
        <h3 className="group-card-description">{groupes.description}</h3>
      </div>
      {/* ))} */}
    </div>
  );
};

export default GroupCard;
