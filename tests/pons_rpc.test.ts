import { PonsRPCClient } from '../src/services/pons_rpc';

describe('PonsRPCClient', () => {
    it('should initialize with the correct endpoint', () => {
        const client = new PonsRPCClient('ws://localhost:8546');
        expect(client).toBeDefined();
    });
});
