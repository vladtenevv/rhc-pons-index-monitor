import { logger } from '../utils/logger';

export class CoinGeckoAdapter {
    public async fetchPrice(symbol: string): Promise<number> {
        // Mock fallback for DevNet
        logger.debug(`Fetching off-chain price for ${symbol}`);
        return Math.random() * 1000;
    }
}
