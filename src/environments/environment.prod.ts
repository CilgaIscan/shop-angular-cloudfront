import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: '/api/',
    order: '/api/',
    import: '/api/',
    bff: '/api/',
    cart: '/api/',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
