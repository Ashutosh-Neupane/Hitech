import type { CatalogApiResponse } from '@/types/catalog';

/**
 * Tiny offline fallback when the live API is unavailable (auth, network, etc.).
 * Keeps the site usable without shipping a full catalog dump in the bundle.
 */
export const fallbackCatalogResponse: CatalogApiResponse = {
  Data: [
    {
      id: 'sample-router',
      item_code: 'SAMPLE-XPON-ROUTER',
      item_name: 'Sample fiber router (offline catalog)',
      item_group: 'COMPUTER PERIPHERALS',
      stock_uom: 'Pcs',
      brand: 'Huawei',
      custom_app_description: 'Product information is shown from a local fallback when the API is unavailable.',
      custom_key_features: 'Connects to your site when the network API is back.\n',
      custom_specifications: 'Status: offline fallback',
      country_of_origin: null,
      custom_image_1_link: 'https://hitech.dndts.net/files/8141.png',
      custom_image_2_link: null,
      custom_image_3_link: null,
      custom_image_4_link: null,
      custom_image_5_link: null,
      custom_minimum_order_quantity: 1,
      custom_increment_on_quantity: 1,
      prices: [
        { price_list: 'Retail Rate', price_list_rate: 0 },
        { price_list: 'Wholesale Rate', price_list_rate: 0 },
        { price_list: 'Dealer Rate', price_list_rate: 0 },
      ],
      item_group_hierarchy: [
        { name: 'All Item Groups', parent_item_group: '', is_group: 1 },
        { name: 'COMPUTER PERIPHERALS', parent_item_group: 'All Item Groups', is_group: 0 },
      ],
    },
    {
      id: 'sample-adapter',
      item_code: 'SAMPLE-ADAPTER-12V',
      item_name: 'Sample 12V adapter (offline catalog)',
      item_group: 'ELECTRONIC ACCESSORIES',
      stock_uom: 'Pcs',
      brand: null,
      custom_app_description: 'Replace this list by fixing API access or updating the live endpoint.',
      custom_key_features: '',
      custom_specifications: 'Status: offline fallback',
      country_of_origin: null,
      custom_image_1_link: null,
      custom_image_2_link: null,
      custom_image_3_link: null,
      custom_image_4_link: null,
      custom_image_5_link: null,
      custom_minimum_order_quantity: 1,
      custom_increment_on_quantity: 1,
      prices: [
        { price_list: 'Retail Rate', price_list_rate: 0 },
        { price_list: 'Wholesale Rate', price_list_rate: 0 },
        { price_list: 'Dealer Rate', price_list_rate: 0 },
      ],
      item_group_hierarchy: [
        { name: 'All Item Groups', parent_item_group: '', is_group: 1 },
        { name: 'ELECTRONIC ACCESSORIES', parent_item_group: 'All Item Groups', is_group: 0 },
      ],
    },
  ],
};
