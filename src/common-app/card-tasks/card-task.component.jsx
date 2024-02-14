import { useNavigate } from "react-router-dom";
import { switchRoutes } from "@/router/constants-routes";
import "./card-list.styles.css";

export const CardTasks = ({ task }) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`${switchRoutes.taskInfo}/${task.id}`)}
      className="liList"
      key={task.id}
    >
      {task.title}
    </li>
  );
};
