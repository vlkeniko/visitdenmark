import React from "react";
import playimage from "../../play-image.png";
import TaskList from "../../components/TaskList";

export default function FamilyTasks() {
  return (
    <div>
      <div className="img-gradient">
        <img className="play-image" src={playimage} alt="fam" />
      </div>
      <h1>Family</h1>
      <p>Tasks</p>
      <p className="completed-tasks">3 / 8 tasks completed | 260 pts </p>
      <TaskList />
    </div>
  );
}
