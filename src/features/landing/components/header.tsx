import { Link } from "react-router";

import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img className="h-4" src="./forklift-logo-transparent.png" />

          <span className="font-semibold text-foreground text-xl">
            Forklift
          </span>
        </div>

        <nav className="hidden grow items-center gap-8 justify-self-start pl-8 md:flex">
          <a
            href="#features"
            className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
          >
            Features
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
