import { ethers } from 'ethers'

function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw Error(`Environment variable ${name} not set`);
  }
  return value;
}

async function main() {
  const validatorAnnounceAddress = getEnvVar('VALIDATOR_ANNOUNCE_ADDRESS');
  const validator = getEnvVar('VALIDATOR');
  const storageLocation = getEnvVar('STORAGE_LOCATION');
  const signature = getEnvVar('SIGNATURE');
  const rpcUrl = getEnvVar('RPC_URL');
  const privateKey = getEnvVar('PRIVATE_KEY');

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const signer = new ethers.Wallet(privateKey, provider);
  
  const iface = new ethers.utils.Interface(['function announce(address,string,bytes)']);
  const tx = await signer.sendTransaction({
    to: validatorAnnounceAddress,
    data: iface.encodeFunctionData('announce', [validator, storageLocation, signature]),
  });
  console.log('Sent tx:', tx);
  const receipt = await tx.wait();
  console.log('Receipt', receipt);
}

main().catch((err) => console.log('Error!', err));
