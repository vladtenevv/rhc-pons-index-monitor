# Robinhood Chain Architecture

The PONS (Proof of Net Settlement) system is designed to provide ultra-low latency index updates across the Robinhood Chain.

## Core Components
- **Index Monitor**: Listens to WebSocket events from the RHC RPC.
- **Bridges**: Validates incoming transactions for approved index assets.
- **Adapters**: Fetches off-chain price data to weigh against the on-chain reserves.

*(Note: See the configuration files in `src/config/` for the current network allowlists and DevNet asset addresses.)*
