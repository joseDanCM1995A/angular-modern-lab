import { Meta } from "@angular/platform-browser";
import { Item } from "./item.interface";
import { Links } from "./links.interface";

export interface ApiResponse {
  items: Item[];
  meta:  Meta;
  links: Links;
}


