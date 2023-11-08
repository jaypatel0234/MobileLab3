"use client";
import React, { useState } from 'react';
import ToDoList from './ToDoList'; // Make sure the file path is correct

function App() {
  // State variable to store the list of tasks
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Render the App component
  return (
    <div>
      <h1>My Task List</h1>
      {/* Pass the tasks array to the ToDoList component using the tasks prop */}
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
