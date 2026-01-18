"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
  
  <div>
    <h1>Home Page</h1>
    <SignedOut>
      <SignUpButton mode="modal">
        <Button>Sign Up</Button>
      </SignUpButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton>
        <Button>Logout</Button>
      </SignOutButton>
    </SignedIn>
  </div>
  );
}