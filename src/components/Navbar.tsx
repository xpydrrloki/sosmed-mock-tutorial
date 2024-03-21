"use client"
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
    const router =useRouter()
  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-3xl font-bold font-sans cursor-pointer" onClick={()=>router.push("/")}>SOSMED</h1>
          <div className="flex gap-4">
            <Button variant="outline" className="text-black">Login</Button>
            <Button variant="outline" className="bg-primary" onClick={()=>router.push("/register")}>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
