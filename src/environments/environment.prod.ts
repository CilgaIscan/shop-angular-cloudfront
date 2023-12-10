import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'http://localhost:9000/',
    order: 'http://localhost:9000/',
    import: 'http://localhost:9000/',
    bff: 'http://localhost:9000/',
    cart: 'http://localhost:9000/',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
