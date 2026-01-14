import { config } from 'dotenv';
config();

export const ENV = {
  PONS_RPC_URL: process.env.PONS_RPC_URL || 'wss://testnet.rhc.network/pons',
  NODE_ENV: process.env.NODE_ENV || 'development'
};
