import Main from "./components/main/Main";
import TaskBar from "./components/taskbar/TaskBar";

export default function App() {
  return (
    <div className=" overflow-hidden p-1 flex flex-col items-center w-screen h-screen bg-black">
      <TaskBar />
      <Main />
    </div>
  );
}
