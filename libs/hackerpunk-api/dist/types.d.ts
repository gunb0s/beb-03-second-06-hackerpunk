import { ethers } from "ethers";
import { HP as _HP1, HPA as _HPA1 } from "../../dist/types";
import { HPTimeLock as _HPTimeLock1 } from "../../dist/types.d";
/**
 * @method: returns address and privateKey
 * @param {string} pwd user password
 * @return {Promise} object of address, privateKey and mnemonic
 */
export const createWallet: (pwd: string) => Promise<any>;
export class HP {
    contract: ethers.Contract;
    contractAddress: string;
    abi: ethers.ContractInterface;
    constructor(signer: ethers.Signer, contractAddress: string, abi: ethers.ContractInterface);
    /**
     * @method change signer of contract
     * @param signer
     */
    changeContractSigner(signer: ethers.Signer): Promise<void>;
    /**
     * @method initial minting once, only admin
     */
    init(): Promise<void>;
    /**
     * @method enable ExternalHP Contract to mint
     */
    grantMinterRole(contract: string): Promise<void>;
    /**
     * @method set signup token reward, only admin
     * @param signupReward send value of Wei as string or BigInt
     */
    setSignupReward(signupReward: string | BigInt): Promise<void>;
    /**
     * @method set attendacne token reward, only admin
     * @param attendanceReward send value of Wei as string or BigInt
     */
    setAttendanceReward(attendanceReward: string | BigInt): Promise<void>;
    /**
     * @method mint token to reward signup, only minter
     */
    signupMint(recipient: string): Promise<void>;
    /**
     * @method mint token to reward attendacne, only minter
     */
    attendanceMint(recipient: string): Promise<void>;
    /**
     * @method mint token to reward users at once, only minter
     */
    attendanceMintBatch(recipients: string[]): Promise<void>;
    /**
     * @method check balance of user
     */
    balanceOf(user: string): Promise<BigInt>;
    withdrawToExternalAddress(serverAddressSigner: ethers.Signer, externalAddress: string, amount: string | BigInt): Promise<void>;
}
export class HPTimeLock {
    contract: ethers.Contract;
    contractAddress: string;
    abi: ethers.ContractInterface;
    constructor(signer: ethers.Signer, contractAddress: string, abi: ethers.ContractInterface);
    /**
     * @method change signer of contract
     * @param signer
     */
    changeContractSigner(signer: ethers.Signer): Promise<void>;
    /**
     * @returns 0: not started, 1: proceeding 2: complete, 3: reverted
     */
    checkDonationStatus(articleId: number): Promise<number>;
    getDonators(articleId: number): Promise<string[]>;
    getDonationBalance(articleId: number): Promise<BigInt>;
    /**
     * @method donator approve donation token to HPTimeLock contract and then, this token locked, only owner
     * @param hp HP's Contract should be connected to donator's signer
     * @param amount send value of Wei as string or BigInt
     */
    donate(hp: _HP1, articleId: number, donator: string, writer: string, amount: string | BigInt): Promise<void>;
    /**
     * @method article removed, all token donated are returned to donators, only owner
     */
    revokeAll(articleId: number, writer: string): Promise<void>;
    /**
     * @method donator revoke donation and token returned, only owner
     */
    revokeDonate(articleId: number, donator: string): Promise<void>;
    /**
     * @method donation token released to writer after lock time, only owner
     */
    release(articleId: number, writer: string): Promise<void>;
}
export class PHPTimeLock extends _HPTimeLock1 {
    constructor(signer: ethers.Signer, contractAddress: string, abi: ethers.ContractInterface);
}
export class ExternalHP {
    contract: ethers.Contract;
    contractAddress: string;
    abi: ethers.ContractInterface;
    constructor(signer: ethers.Signer, contractAddress: string, abi: ethers.ContractInterface);
    /**
     * @method change signer of contract
     * @param signer
     */
    changeContractSigner(signer: ethers.Signer): Promise<void>;
    /**
     * @method onlyOwner
     * @param fee send value of Wei as string or BigInt
     */
    setSignupFee(credentialType: number, fee: string | BigInt): Promise<void>;
    signupFee(credentialType: number): Promise<BigInt>;
    /**
     * @method onlyOwner
     */
    getAllInternalAddresses(): Promise<string[]>;
    registerAddress(internalAddress: string): Promise<void>;
    isRegistered(internalAddress: string): Promise<boolean>;
    isAuthenticated(internalAddress: string): Promise<boolean>;
    checkExternalAuthenticated(internalAddress: string, externalAddress: string): Promise<boolean>;
    getCredentialType(internalAddress: string): Promise<number>;
    singupEventListener(internalAddress: string, externalAddress: string, provider: ethers.providers.BaseProvider, callback: ethers.providers.Listener): Promise<void>;
}
export class HPA {
    contract: ethers.Contract;
    contractAddress: string;
    abi: ethers.ContractInterface;
    constructor(signer: ethers.Signer, contractAddress: string, abi: ethers.ContractInterface);
    /**
     * @method change signer of contract
     * @param signer
     */
    changeContractSigner(signer: ethers.Signer): Promise<void>;
    safeMint(recipient: string): Promise<void>;
    ownerOf(tokenId: BigInt | string): Promise<string>;
    balanceOf(owner: string): Promise<BigInt | string>;
}
export class PHP {
    contract: ethers.Contract;
    contractAddress: string;
    abi: ethers.ContractInterface;
    constructor(signer: ethers.Signer, contractAddress: string, abi: ethers.ContractInterface);
    /**
     * @method change signer of contract
     * @param signer
     */
    changeContractSigner(signer: ethers.Signer): Promise<void>;
    balanceOf(owner: string): Promise<BigInt | string>;
}
export class HPAStakingSystem {
    contract: ethers.Contract;
    contractAddress: string;
    abi: ethers.ContractInterface;
    constructor(signer: ethers.Signer, contractAddress: string, abi: ethers.ContractInterface);
    /**
     * @method change signer of contract
     * @param signer
     */
    changeContractSigner(signer: ethers.Signer): Promise<void>;
    stake(hpa: _HPA1, tokenId: BigInt | string): Promise<void>;
    updateReward(): Promise<void>;
    claimReward(owner: string): Promise<void>;
    unstake(tokenId: BigInt | string): Promise<void>;
}
/**
 * @param network default mainnet, can be url like http or wss
 * @param provider etherscan, infura, alchemy, etc...
 * @param key apikey, in case of infura project_id
 * @returns provider or Error
 */
export const setProvider: (network: string, provider?: string | undefined, key?: string | undefined) => ethers.providers.BaseProvider;
/**
 * @method make crypto wallet
 * @param privateKey string
 * @returns wallet
 */
export const setWallet: (privateKey: string) => ethers.Wallet;
/**
 * @method connect provider to wallet
 * @param wallet
 * @param provider
 * @returns signer
 */
export const setSigner: (wallet: ethers.Wallet, provider: ethers.providers.BaseProvider) => ethers.Signer;

//# sourceMappingURL=types.d.ts.map