import { Frontend } from "./components/Frontend";
import { Landing } from "./components/Landing";

export default function Home() {
  return (
    <div className="max-w-400">
      <Landing />
      <Frontend />
    </div>
  );
}
