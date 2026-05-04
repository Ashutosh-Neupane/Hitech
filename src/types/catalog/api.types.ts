/** Wire / ERP shapes as returned by the catalog API. */

export type CatalogPriceTier = {
  price_list: string;
  price_list_rate: number;
};

export type CatalogItemGroupNode = {
  name: string;
  parent_item_group: string;
  is_group: number;
};

export type CatalogApiItem = {
  id: string;
  item_code: string;
  item_name: string;
  item_group: string;
  stock_uom: string;
  brand: string | null;
  custom_app_description: string | null;
  custom_key_features: string | null;
  custom_specifications: string | null;
  country_of_origin: string | null;
  custom_image_1_link: string | null;
  custom_image_2_link: string | null;
  custom_image_3_link: string | null;
  custom_image_4_link: string | null;
  custom_image_5_link: string | null;
  custom_minimum_order_quantity: number | null;
  custom_increment_on_quantity: number | null;
  prices: CatalogPriceTier[];
  item_group_hierarchy: CatalogItemGroupNode[];
};

export type CatalogApiResponse = {
  Data: CatalogApiItem[];
};
