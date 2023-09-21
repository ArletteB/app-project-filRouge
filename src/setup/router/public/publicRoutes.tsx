import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../../app/pages/home/homePage";
import { SigninPage } from "../../../app/pages/auth/signinPage";
import { SignupPage } from "../../../app/pages/auth/signupPage";
import { ForgotPasswordPage } from "../../../app/pages/forgot-password/forgot-password";
import { ResetPasswordPage } from "../../../app/pages/reset-password/reset-password";
import SingleGroup from "../../../app/components/group/SingleGroup";
import CreatePost from "../../../app/components/post/CreatePost";
import { UserProfilPage } from "../../../app/pages/user/userProfil";
import EditProfil from "../../../app/components/userProfil/editProfil";
import { AccueilPage } from "../../../app/pages/home/accueilPage";
import EventForm from "../../../app/components/event/card/EventForm";
import SingleEvent from "../../../app/components/event/SingleEvent";
import GroupPage from "../../../app/pages/group/groupPage";
import { EventListPage } from "../../../app/pages/event/eventList";
import CreateGroup from "../../../app/components/group/card/createGroup";
import CreateGroupPage from "../../../app/pages/group/createGoupePage";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/accueil" element={<AccueilPage />} />
      <Route path="/auth/signin" element={<SigninPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route path="/groupe/:id" element={<SingleGroup />} />
      <Route path="/groupes" element={<GroupPage />} />
      <Route path="/groupes/:groupId/posts/create" element={<CreatePost />} />
      <Route path="/create-event" element={<EventForm />} />
      <Route path="/events" element={<EventListPage />} />
      <Route path="/events/:eventId" element={<SingleEvent />} />
      <Route path="/profile" element={<UserProfilPage />} />
      <Route path="/edit-profile" element={<EditProfil />} />
      <Route path="/create-group" element={<CreateGroupPage />} />

      {/* <Route path="*" element={<NotFoundPage />} />  404 page*/}
    </Routes>
  );
};
