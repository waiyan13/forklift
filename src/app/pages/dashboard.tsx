import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";

import { MetricCard } from "@/features/dashboard/components/metric-card";
import { UsageChart } from "@/features/dashboard/components/usage-chart";

function DashboardPage() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Items"
          value="248"
          change="+12 from last week"
          changeType="positive"
          icon={Package}
          iconColor="text-primary"
        />
        <MetricCard
          title="Low Stock Alerts"
          value="8"
          change="Requires attention"
          changeType="negative"
          icon={AlertTriangle}
          iconColor="text-warning"
        />
        <MetricCard
          title="Inventory Value"
          value="$12,450"
          change="+8.2% from last month"
          changeType="positive"
          icon={DollarSign}
          iconColor="text-accent"
        />
        <MetricCard
          title="Items Used Today"
          value="34"
          change="Normal activity"
          changeType="neutral"
          icon={TrendingUp}
          iconColor="text-primary"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-3">
          <UsageChart />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
