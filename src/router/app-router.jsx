import { Routes, Route } from "react-router-dom";
import { HomeLayout, TaskInfoLayout } from "@/layout";
import { switchRoutes } from "./constants-routes";

export const AppRouter = () => {


  return (
    <Routes>
      <Route path={switchRoutes.root} element={<HomeLayout />} />
      <Route path={`${switchRoutes.taskInfo}/:id`} element={<TaskInfoLayout />} />
    </Routes>
  );
};
