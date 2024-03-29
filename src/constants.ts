export const DEV_API_URL = process.env.DEV_API_URL || '';
export const PROD_API_URL = process.env.PROD_API_URL || '';
export const API_URL =
  process.env.NODE_ENV === 'development' ? DEV_API_URL : PROD_API_URL;
export const NAVIGATION_HEADER_HEIGHT = 60;
