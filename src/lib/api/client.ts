import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { getCatalogApiOrigin } from '@/config/catalog';

/**
 * Shared Axios instance for server-side API calls (catalog, etc.).
 * Use env for origin and optional auth so SSR never hard-fails when the API is down.
 */
export const apiClient = axios.create({
  baseURL: getCatalogApiOrigin(),
  timeout: 25_000,
  headers: {
    Accept: 'application/json',
  },
  validateStatus: status => status >= 200 && status < 300,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const auth = process.env.CATALOG_API_AUTHORIZATION;
    if (auth && config.headers) {
      config.headers.Authorization = auth;
    }
    return config;
  },
  error => Promise.reject(error)
);

apiClient.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (process.env.NODE_ENV === 'development') {
      const url = error.config?.baseURL
        ? `${error.config.baseURL}${error.config.url ?? ''}`
        : error.config?.url;
      console.warn('[api]', url, error.response?.status ?? error.code, error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
