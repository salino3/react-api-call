import { Routes, Route } from "react-router-dom";
import { HomeLayout } from "../layout";

export const AppRouter = () => {
  return (
  <Routes>
 <Route path={'/'}  element={<HomeLayout />} />
  </Routes>
    );
};
