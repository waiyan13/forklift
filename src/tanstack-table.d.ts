import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends Object, TValue> {
    align: "left" | "center" | "right";
    className?: string;
  }
}
