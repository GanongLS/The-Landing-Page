// To parse this data:
//
//   import { Convert, Australia } from "./file";
//
//   const australia = Convert.toAustralia(json);

export interface Australia {
  item: MainItem;
  modular_content: ModularContent;
}

export interface MainItem {
  system: System;
  elements: MainItemElements;
}

export interface MainItemElements {
  title_page: TitlePage;
  banner_image: BannerImage;
  untitled_linked_items: UntitledLinkedItems;
}

export interface BannerImage {
  type: string;
  name: string;
  value: Value[];
}

export interface Value {
  name: string;
  description: null;
  type: string;
  size: number;
  url: string;
  width: number;
  height: number;
  renditions: Renditions;
}

export interface Renditions {}

export interface TitlePage {
  type: string;
  name: string;
  value: string;
}

export interface UntitledLinkedItems {
  type: string;
  name: string;
  value: string[];
}

export interface System {
  id: string;
  name: string;
  codename: string;
  language: string;
  type: string;
  collection: string;
  sitemap_locations: any[];
  last_modified: Date;
  workflow: string;
  workflow_step: string;
}

export interface ModularContent {
  technical_test___mobile_dev___page_item_1: PageDetailItem;
  technical_test___mobile_dev___page_item_2: PageDetailItem;
  technical_test___mobile_dev___page_item_3: PageDetailItem;
}

export interface PageDetailItem {
  system: System;
  elements: pageDetailElements;
}

export interface pageDetailElements {
  title: TitlePage;
  description: TitlePage;
  icon: BannerImage;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toAustralia(json: string): Australia {
    return JSON.parse(json);
  }

  public static australiaToJson(value: Australia): string {
    return JSON.stringify(value);
  }
}
