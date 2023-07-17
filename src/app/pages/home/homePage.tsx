import { FC, useState } from "react";
import { useUserContext } from "../../../setup/contexts/UserContext";
import Navbar from "../../components/ui/Navbar";
import SearchBar from "../../components/ui/SearchBar";
import GroupList from "../../components/group/GroupList";
import axios from "axios";
import { GroupType } from "../../../setup/types/group/group.type";

export const HomePage: FC = () => {
  const { user } = useUserContext();
  const [groupData, setGroupData] = useState<GroupType[]>([]);
  const [isSearching, setIsSearching] = useState(false); // Ajoutez une variable d'état pour indiquer si une recherche est en cours

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
      setIsSearching(true); // Définir isSearching sur true lorsqu'une recherche est effectuée
      fetchGroupData(searchValue);
    } else {
      setIsSearching(false); // Définir isSearching sur false lorsque la recherche est vide
      setGroupData([]);
    }
  };

  const handleClear = () => {
    setIsSearching(false); // Réinitialiser isSearching à false lors de la suppression de la recherche
    setGroupData([]);
  };

  return (
    <div>
      <Navbar />
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
  );
};
