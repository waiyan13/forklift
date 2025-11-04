import { useEffect, useState } from "react";

import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function HeroSection() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setIsRevealed(true);
  }, []);

  return (
    <section className="relative overflow-hidden border-border border-b bg-background py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className={cn(
              `mb-6 text-balance font-bold text-4xl text-foreground tracking-tight transition-[clip-path,opacity,transform] duration-1000 ease-out sm:text-6xl lg:text-7xl`,
              isRevealed
                ? "translate-y-0 opacity-100 [clip-path:inset(0_0_0_0)]"
                : "translate-y-8 opacity-0 [clip-path:inset(0_0_100%_0)]",
            )}
          >
            Inventory management that moves your business forward
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed sm:text-xl">
            Streamline your warehouse operations with real-time tracking, and
            powerful analytics. Built for businesses that need to scale.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="dashboard">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
