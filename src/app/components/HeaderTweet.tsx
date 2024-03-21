"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const HeaderTweet: React.FC = () => {
  const [tweet, setTweet] = useState("");
  const [newTweet, setNewTweet] = useState("");
  return (
    <section className="p-4"> 
      <div className="relative flex gap-4 ">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Textarea
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
          placeholder="Share your thoughts..., maybe?"
          style={{ resize: "none" }}
          maxLength={200}
        />
      </div>
      <p className="my-2 text-right text-xs">{tweet.length}/200</p>
      <div className="flex justify-end">
        <Button>Tweet</Button>
      </div>
      <Separator className="my-4" />

    </section>
  );
};

export default HeaderTweet;
