import React, { useState, useEffect } from "react";
import GoalForm from "./Components/GoalForm";
import Header from "./Components/Header";
import Inprogress from "./Components/Inprogress";
import Completed from "./Components/Completed";

function App() {
  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem("goals")) || []
  );
  const [editingGoal, setEditingGoal] = useState("");

  // Update local storage whenever goals change
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
    console.log(goals);
  }, [goals]);

  const addGoal = (newGoal) => {
    if (editingGoal) {
      setGoals(
        goals.map((goal) => (goal.id === editingGoal.id ? newGoal : goal))
      );
      setEditingGoal("");
    } else {
      setGoals((goals) => [...goals, newGoal]);
    }
  };
  const editGoal = (goalEl) => {
    setEditingGoal(goalEl);
  };
  const changeStatus = (id) => {
    setGoals((goals) => {
      return goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      );
    });
  };
  return (
    <div className="App">
      <Header />
      <GoalForm onAdd={addGoal} editingGoal={editingGoal} />
      <div className="goal-list">
        <Inprogress
          goals={goals}
          ongoalEdit={editGoal}
          setGoals={setGoals}
          changeStatus={changeStatus}
        />
        <Completed goals={goals} changeStatus={changeStatus} />
      </div>
    </div>
  );
}

export default App;
