import React from "react";

const Completed = ({ goals }) => {
  
  const completedGoals = goals.filter((goal) => goal.completed);

  return (
    <>
      <div className="completed-container">
        <h1 className="completed-heading">Completed</h1>
        <ul>
          {completedGoals.map((goal) => (
            <li key={goal.id} className="goal-name">
              <p>✔ {goal.goal}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Completed;
