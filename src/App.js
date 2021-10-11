import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react" />
      <Todo text="build projects with react" />
      <Todo text="freelance to raise money" />
    </div>
  );
}

export default App;
