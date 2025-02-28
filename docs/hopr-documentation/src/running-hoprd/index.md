<!-- ---
description: The tokens used on the HOPR network
--- -->

# Start Here

These instructions assume you have installed HOPRd on your machine and you are able to access [http://localhost:3000/](http://localhost:3000/).

To use HOPR, you'll need two types of funds:

- the native token of the blockchain the HOPR token is linked to (for example: ETH)
- HOPR token

The HOPR network is currently running on xDAI, a [side-chain](https://www.xdaichain.com/) of Ethereum, which means the native token is _xDAI_.
On xDAI, the HOPR Token, called _xHOPR_, is deployed in [this address](https://blockscout.com/poa/xdai/address/0x12481c3Ed97b32D94E71C2039DBC44432ADD39a0/transactions).

<!-- After mainnet launch, the native token will be gETH and the HOPR token will simply be HOPR. However, for our various testnets HOPR will be running on a variety of different chains. -->

## Running HOPRd

With this command, we will run hoprd and store logs.
When running this command the first time, it will create a folder `db` in the current
working directory where it will store the encrypted key to your node and your off-chain
private data.

```sh
DEBUG=hopr* npx hoprd --admin --init --announce --identity .hopr-identity --password switzerland --forwardLogs
```

### Accessing HOPRd on a local machine

Visit [http://localhost:3000](http://localhost:3000).

### Accessing HOPRd on a VPS

```sh
ssh -L 3000:127.0.0.1:3000 root@`<VPS ip address>`
# you'll then be prompted to enter your password
```

Then visit http://localhost:3000 on your browser.
