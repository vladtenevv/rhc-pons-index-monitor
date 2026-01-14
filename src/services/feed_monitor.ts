import { logger } from '../utils/logger';

export class FeedMonitor {
    private isHealthy: boolean = true;
    private lastUpdate: number = Date.now();

    public checkHealth() {
        const timeSinceLastUpdate = Date.now() - this.lastUpdate;
        if (timeSinceLastUpdate > 5000) {
            logger.warn('Feed monitor detected stale data on RHC network.');
            this.isHealthy = false;
        } else {
            this.isHealthy = true;
        }
        return this.isHealthy;
    }

    public registerUpdate() {
        this.lastUpdate = Date.now();
    }
}
