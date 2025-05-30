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
 export interface FooterPCLink {
  linkName?: string;
  linkUrl?:  string;
 }
 export interface OtherEntrance{
   url: string;
   title:string
 }
