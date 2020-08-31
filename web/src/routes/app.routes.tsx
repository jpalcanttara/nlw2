import React from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/Landing";
import TeacherList from "../pages/TeacherList";
import TeacherForm from "../pages/TeacherForm";
import Profile from "../pages/Profile";

const AppRoutes: React.FC = () => (
  <>
    <Route path="/" exact component={Landing} />
    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />
    <Route path="/profile" component={Profile} />
  </>
);

export default AppRoutes;
