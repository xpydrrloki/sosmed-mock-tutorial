import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";

const CardWhoToFollow = () => {
  return (
    <div className="p-4 rounded bg-orange-200">
      <h2 className="text-lg font-semibold">Who to follow</h2>
      <div className="flex items-center justify-between my-2 rounded-md border border-zinc-400 p-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>xpydrr</p>
        </div>
        <UserPlus />
      </div>
    </div>
  );
};

export default CardWhoToFollow;
