import Image from "next/image";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Card } from "@/app/components/card";


export default function Home() {
  return (
    <main>
      <Header />

      <div className="grid grid-cols-3">
        <Card name="Drone 1" description="Small civilian quadcopter UAVs such as DJI Phantom designed for commercial and recreational aerial photography, which are also useful for short-range reconnaissance and strike (if converted) missions by the law enforcement forces and the military." url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Spying_quadcopter_%28cropped%29.jpg/1280px-Spying_quadcopter_%28cropped%29.jpg"/>
        <Card name="Drone 2" description="The Turkish STM Kargu was the first lethal autonomous weapon to attack enemy combatants in warfare." url="https://upload.wikimedia.org/wikipedia/commons/6/69/STM_Kargu.png"/>
        <Card name="Drone 3" description="Artist's concept of Ingenuity landing on Mars" url="https://upload.wikimedia.org/wikipedia/commons/8/87/Helicopter_Above_Perseverance_on_Mars_%28cropped%29.jpg" />
      </div>
      
      <Footer />
    </main>
  );
}
