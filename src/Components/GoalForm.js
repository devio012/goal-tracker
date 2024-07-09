import React, { useState,useEffect } from "react";

const GoalForm = ({ onAdd, editingGoal}) => {
  const [goalInput, setGoalInput] = useState("");
  useEffect(()=>{
    if(editingGoal){
      setGoalInput(editingGoal.goal);

    } else{
      setGoalInput('');
    }
  },[editingGoal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      id: editingGoal ? editingGoal.id : Date.now(),
      goal: goalInput,
      completed:false
    };
    onAdd(newGoal);
    setGoalInput('');
  };
  return (
    <div className="form-container" >
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your goal"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
          maxLength={20}
        />
        <button className="add-btn"><h4>{editingGoal? 'Update' :'Add'}</h4></button>
      </form>
    </div>
  );
};

export default GoalForm;
