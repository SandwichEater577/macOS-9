import Window from "./Window";
import AboutThisComputer from "./Windows/AboutThisComputer";

export default function Main() {
  return (
    <div className="relative bg-indigo-400 h-full w-10/12 border rounded-xl rounded-t-none">
      <Window title="About This Computer">
        <AboutThisComputer />
      </Window>
    </div>
  );
}
