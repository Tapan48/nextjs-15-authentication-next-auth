"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions/auth";

export function SignOutButton() {
  return (
    <Button onClick={() => logout()} variant="outline">
      Sign out
    </Button>
  );
}
