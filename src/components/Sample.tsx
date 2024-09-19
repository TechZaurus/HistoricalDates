import { teststyle } from "./Sample.module.scss";

export default function Sample() {
  return (
    <footer>
      <a className={teststyle} href="#">
        Тестовый Footer для настройки Webpack+TS
      </a>
    </footer>
  );
}
