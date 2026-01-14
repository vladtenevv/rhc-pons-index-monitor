import { logger } from '../utils/logger';
import { RHCAsset } from '../types';

export class TokenBridgeValidator {
    public validateAssetPayload(asset: RHCAsset) {
        if (!asset.address.startsWith('0x') && !asset.address.startsWith('Feath')) {
            logger.warn(`Unusual asset address format detected: ${asset.address}`);
        }
        return true;
    }
}
