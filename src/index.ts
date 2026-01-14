import { PonsRPCClient } from './services/pons_rpc';
import { ENV } from './config/env';
import { logger } from './utils/logger';

async function bootstrap() {
    logger.info('Starting RHC PONS Index Monitor...');
    
    const rpcClient = new PonsRPCClient(ENV.PONS_RPC_URL);
    
    // Simulate runtime
    setInterval(() => {
        logger.info('Heartbeat: Monitor is running...');
    }, 10000);
}

bootstrap().catch(err => {
    logger.error(`Critical error during bootstrap: ${err.message}`);
    process.exit(1);
});
