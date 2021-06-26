// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePost } from "./types/ibcblog/tx";
import { MsgUpdatePost } from "./types/ibcblog/tx";
import { MsgDeletePost } from "./types/ibcblog/tx";
const types = [
    ["/ahmetson.chain.ibcblog.MsgCreatePost", MsgCreatePost],
    ["/ahmetson.chain.ibcblog.MsgUpdatePost", MsgUpdatePost],
    ["/ahmetson.chain.ibcblog.MsgDeletePost", MsgDeletePost],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreatePost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgCreatePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgUpdatePost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/ahmetson.chain.ibcblog.MsgDeletePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
