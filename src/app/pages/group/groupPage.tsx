import React, { FC, useState, useEffect } from "react";
import { useUserContext } from "../../../setup/contexts/UserContext";
import GroupList from "../../components/group/GroupList";
import SearchBar from "../../components/ui/SearchBar";
import axios from "axios";
import { GroupType } from "../../../setup/types/group/group.type";
import SingleGroup from "../../components/group/SingleGroup";
import NavBar from "../../components/ui/Navbar";

const GroupPage: FC = () => {
  const { user } = useUserContext();
  const [groupData, setGroupData] = useState<GroupType[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [userGroupId, setUserGroupId] = useState<number | null>(null);

  useEffect(() => {
    // Vérifiez si l'utilisateur est dans un groupe
    if (user && user.groupes && user.groupes.length > 0) {
      // Supposons que vous voulez l'ID du premier groupe de l'utilisateur
      const groupId = user.groupes[0].id;
      setUserGroupId(groupId);
      fetchUserGroup(groupId);
    }
  }, [user]);

  const fetchUserGroup = async (groupId: number) => {
    try {
      // Utilisez l'ID du groupe pour obtenir les informations du groupe
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/groupes/${groupId}`
      );
      const groupData = response.data;
      console.log("Group Data:", groupData);
    } catch (error) {
      console.error("Error fetching user group:", error);
    }
  };

  const fetchGroupData = async (postalCode?: string) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/groupes`,
        {
          params: { postalCode },
        }
      );
      const groups = response.data;
      setGroupData(groups);
    } catch (error) {
      console.error("Error fetching group data:", error);
    }
  };

  const handleSearch = (searchValue: string) => {
    if (searchValue.trim() !== "") {
      setIsSearching(true);
      fetchGroupData(searchValue);
    } else {
      setIsSearching(false);
      setGroupData([]);
    }
  };

  const handleClear = () => {
    setIsSearching(false);
    setGroupData([]);
  };

  return (
    <div>
      <NavBar />
      {userGroupId ? (
        <div>
          <SingleGroup />
        </div>
      ) : (
        <div>
          <SearchBar
            placeholder="Rechercher un groupe par code postal"
            value=""
            onChange={() => {}}
            onSearch={handleSearch}
            onClear={handleClear}
          />
          <GroupList
            groupData={groupData}
            setGroupData={setGroupData}
            isSearching={isSearching}
          />
        </div>
      )}
    </div>
  );
};

export default GroupPage;
