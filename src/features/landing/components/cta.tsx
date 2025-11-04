import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance font-bold text-3xl tracking-tight sm:text-5xl">
            Ready to optimize your inventory?
          </h2>
          <p className="mb-10 text-pretty text-lg leading-relaxed opacity-90">
            Join thousands of businesses that trust Forklift to manage their
            inventory.
            <span className="block">Start your free 14-day trial today.</span>
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
