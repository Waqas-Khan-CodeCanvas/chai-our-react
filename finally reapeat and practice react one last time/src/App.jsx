import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="flex flex-col items-center p-4 m-3">
      <div
        id="notification-container"
        class="fixed top-4 right-4 z-50 space-y-2"
      ></div>

      <h1 className="text-xl">Todo Using ReduxToolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
