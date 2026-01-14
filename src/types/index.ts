export interface RHCAsset {
    symbol: string;
    address: string;
    weight: number;
    internal_notes?: string;
}

export interface PonsIndexUpdate {
    timestamp: number;
    new_value: number;
    signature: string;
}
