import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  { day: "Mon", usage: 280, target: 250 },
  { day: "Tue", usage: 310, target: 250 },
  { day: "Wed", usage: 268, target: 250 },
  { day: "Thu", usage: 305, target: 250 },
  { day: "Fri", usage: 389, target: 350 },
  { day: "Sat", usage: 420, target: 400 },
  { day: "Sun", usage: 342, target: 300 },
];

function UsageChart() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Weekly Usage Trend</CardTitle>
        <CardDescription>Inventory usage vs. target levels</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="usage"
              stroke="var(--color-accent)"
              strokeWidth={2}
              dot={{ fill: "var(--color-accent)", r: 4 }}
              name="Actual Usage"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="var(--color-muted-foreground)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "var(--color-muted-foreground)", r: 4 }}
              name="Target"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export { UsageChart };
