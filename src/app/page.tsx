import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Home as HomeIcon,
  Bell,
  MessageSquare,
  UserRound,
  UserRoundIcon,
  SquareUserRound,
} from "lucide-react";
import HeaderTweet from "./components/HeaderTweet";
import CardWhoToFollow from "./components/CardWhoToFollow";

export default function Home() {
  return (
    <main className="conteiner mx-auto px-4">
        {/* ==============SIDEBAR=================== */}
      <section className="grid grid-cols-5 pt-4">
        <div className="jus flex flex-col gap-3 p-2">
          <Button variant="ghost" className="justify-normal">
            <HomeIcon className="mr-2 h-6 w-6" />
            Home
          </Button>
          <Button variant="ghost" className="justify-normal">
            <Bell className="mr-2 h-6 w-6" />
            Notifications
          </Button>
          <Button variant="ghost" className="justify-normal">
            <MessageSquare className="mr-2 h-6 w-6" />
            Messages
          </Button>
          <Button variant="ghost" className="justify-normal">
            <SquareUserRound className="mr-2 h-6 w-6" />
            Profile
          </Button>
        </div>
        {/* ===============END SIDBAR=============== */}
        
        
        
        {/* ==============TWEET LIST============== */}
        <div className="col-span-3">
          <HeaderTweet />
        </div>
        {/* ==============END TWEET LIST============ */}
        
        
        
        {/* ==============WHO TO FOLLOW============= */}
        <div>
          <CardWhoToFollow />
        </div>
        {/* ============END WHO TO FOLLOW============ */}

      </section>
    </main>
  );
}
