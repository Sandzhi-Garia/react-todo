import React from 'react';

const todoList= [{
  id : 1,
  title : "Homework",
}, 
{
  id : 2,
  title : "Cooking",
}, 
{
  id : 3,
  title : "Going to store",
}]
 
function App() {
  return (
    <div>
        <h1>Todo List</h1>
    <ul>
    {todoList.map(function (item){
  return <li key={item.id}>{item.title}</li>
    })}
    </ul>
    </div>

  );
}

export default App;
