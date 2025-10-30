import { BarChart3, Package, Truck, Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Package,
    title: "Real-Time Tracking",
    description:
      "Monitor inventory levels across all locations with live updates and instant notifications.",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description:
      "Streamline operations with smart automation for reordering, alerts, and reporting.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Make data-driven decisions with comprehensive insights and customizable reports.",
  },
  {
    icon: Truck,
    title: "Supply Chain Integration",
    description:
      "Connect seamlessly with suppliers, warehouses, and shipping providers.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-muted/30 py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance font-bold font-sans text-3xl text-foreground tracking-tight sm:text-5xl">
            Everything you need to manage inventory
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Powerful features designed to help you track, manage, and optimize
            your inventory operations at scale.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border bg-card transition-shadow hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-sans font-semibold text-card-foreground text-xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
