import { WebSocket } from 'ws';
import { logger } from '../utils/logger';

export class PonsRPCClient {
    private ws: WebSocket;
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
        this.ws = new WebSocket(this.endpoint);
        this.setupListeners();
    }

    private setupListeners() {
        this.ws.on('open', () => logger.info(`Connected to PONS RPC at ${this.endpoint}`));
        this.ws.on('message', (data) => this.handleMessage(data));
        this.ws.on('error', (err) => logger.error(`RPC Error: ${err}`));
    }

    private handleMessage(data: any) {
        // Parse incoming index metrics
        logger.debug(`Received PONS data: ${data.toString()}`);
    }
}
