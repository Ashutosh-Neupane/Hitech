export interface Price {
  price_list: string;
  price_list_rate: number;
}

export interface ItemGroupHierarchy {
  name: string;
  parent_item_group: string;
  is_group: number;
}

export interface Product {
  id: string;
  item_code: string;
  item_name: string;
  item_group: string;
  stock_uom: string;
  brand: string;
  custom_app_description: string | null;
  custom_key_features: string | null;
  custom_specifications: string | null;
  country_of_origin: string;
  custom_image_1_link: string | null;
  custom_image_2_link: string | null;
  custom_image_3_link: string | null;
  custom_image_4_link: string | null;
  custom_image_5_link: string | null;
  custom_minimum_order_quantity: number;
  custom_increment_on_quantity: number;
  prices: Price[];
  item_group_hierarchy: ItemGroupHierarchy[];
}

export interface ApiResponse {
  message: Product[];
}
