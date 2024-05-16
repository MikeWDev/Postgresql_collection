import Image from "next/image";
import "../scss/index.scss";
import elephant from "../../public/elephant.png";
import { GameController } from "@phosphor-icons/react/dist/ssr";
import NavElement from "@/components/navElement";

export default function Home() {
  return (
    <div className="container home">
      <Image src={elephant} height={500} width={500} />
      <h1>THE</h1>

      <h1>Postgresql</h1>
      <span></span>
      <h1>app collection</h1>
      <div className="elipse" />
      <div className="elipse" />
      <div className="bar">
        <div className="nav-con">
          <NavElement />
        </div>
      </div>
    </div>
  );
}
