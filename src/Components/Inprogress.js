import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Inprogress = ({ goals, ongoalEdit, setGoals, changeStatus }) => {
  const deleteGoal = (goalEl) => {
    setGoals(goals.filter((goal) => goal.id !== goalEl.id));
  };
  const inProgressGoals = goals.filter((goal) => !goal.completed);
  return (
    <>
      <div className="progress-container">
        <h1 className="progress-heading"> In progress</h1>
        <ul>
          {inProgressGoals?.map((goalEl) => (
            <li key={goalEl.id} className="goal-name">
              <input
                type="checkbox"
                checked={goalEl.completed}
                onChange={() => changeStatus(goalEl.id)}
              />

              <p>{goalEl.goal}</p>
              <div className="btn-container">
                <button
                  className="edit-btn btn"
                  onClick={() => ongoalEdit(goalEl)}
                >
                  <FaEdit />
                </button>
                <button
                  className="del-btn btn"
                  onClick={() => deleteGoal(goalEl)}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Inprogress;
