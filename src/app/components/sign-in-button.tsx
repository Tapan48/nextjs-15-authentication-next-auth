"use client";
import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";
import { login } from "@/lib/actions/auth";

export function SignInButton() {
  return (
    <div className="flex flex-col gap-4 min-w-[200px]">
      <Button
        onClick={() => login("github")}
        variant="outline"
        className="flex gap-2"
      >
        <Github size={20} />
        Sign In With Github
      </Button>

      <Button
        onClick={() => login("google")}
        variant="outline"
        className="flex gap-2"
      >
        <Chrome size={20} />
        Sign In With Google
      </Button>
    </div>
  );
}
