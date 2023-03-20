# How to use

```
# First, install dependencies
yarn

# Now set up all the required environment variables...

# The private key for the account to use for the transaction
export PRIVATE_KEY=0x....

# The address of the ValidatorAnnounce contract
export VALIDATOR_ANNOUNCE_ADDRESS=0x...

# The address of the validator
export VALIDATOR=0xe6072396568e73ce6803b12b7e04164e839f1e54

# The validator's storage location
export STORAGE_LOCATION="...."

# The signature to announce
export SIGNATURE=0x3c8c1e2ec444a78efcb6de8f4c725ab5da95c7ae554889dc2345f719ea48cacd2fb0ebc7edf84dd44b206624fe47569b28bb2858b19b580886d47b3c908665a11b

# The RPC URL of the chain
export RPC_URL=https://

# Run it!
ts-node index.ts
```
