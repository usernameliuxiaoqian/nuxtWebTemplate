export interface NavItemResponse {
  children: NavItemResponse[];
  icon: string;
  id: number;
  level: number;
  mark: string;
  name: string;
  order: number;
  type: "cate" | "nav";
  url: string;
}
