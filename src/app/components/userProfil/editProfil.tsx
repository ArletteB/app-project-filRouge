import React, { useState, useEffect } from "react";
import { useUserContext } from "../../../setup/contexts/UserContext";
import UserService from "../../../setup/services/user.service";
import { UserType } from "../../../setup/types/auth/user.type";
import { useNavigate } from "react-router-dom";

const EditProfile: React.FC = () => {
  const { user, setUser } = useUserContext();
  const [formData, setFormData] = useState<UserType | null>(user);

  const navigate = useNavigate();

  useEffect(() => {
    setFormData(user);
  }, [user]);

  // ...
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (formData) {
      // Vérifiez si la nouvelle valeur est différente de la valeur actuelle avant la mise à jour
      if (formData[name] !== value) {
        setFormData({ ...formData, [name]: value });
      }
    }
  };
  // ...

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedUser = await UserService.update(user?.id, formData);
      setUser(updatedUser);
      navigate("/profile");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil : ", error);
    }
  };
  return (
    <div className="edit-profile">
      <h2>Modifier le profil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData?.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData?.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData?.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adress</label>
          <input
            type="address"
            id="address"
            name="address"
            value={formData?.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData?.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Code postal</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData?.postalCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Numéro</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData?.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Genre</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData?.gender}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enregistrer les modifications</button>
      </form>
    </div>
  );
};

export default EditProfile;
