import "./styles/_variables.scss";
import "./App.scss";
import HistoricalDates from "./blocks/HistoricalDates/HistoricalDates";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

export default function App() {
  return (
    <main>
      <HistoricalDates />
    </main>
  );
}
