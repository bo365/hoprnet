# Overview

HOPR is a two-layer network with communication and incentivization mechanisms.

**HOPR** is a privacy-networking protocol able to communicate and transfer messages securely. This is defined by a **payment layer**, which is a distributed ledger technology \(DLT\) or blockchain infrastructure able to open payment channels on behalf of **HOPR nodes** running the **HOPR network**.

### Ethereum Blockchain

In its first implementation, HOPR relies on the **Ethereum blockchain** as its payment layer. Using **Ethereum smart contracts**, we open **payment channels** on behalf of **HOPR nodes** that forward messages. Message senders attach **HOPR** **tokens** in their messages, which upon successful delivery are paid to the **HOPR nodes** that relayed the message.

To achieve this, a **HOPR node** implements a connector interface that communicates to the Ethereum Blockchain using its popular web library, _web3js_**.** These interfaces allow **HOPR nodes** to monitor, approve, sign and verify when a message is transferred, and thus close a state channel and receive their earned HOPR Tokens. Each **HOPR node** verifies one another, avoiding foul play and rewarding only honest relayers.

![HOPR Protocol Ethereum Blockchain connector architecture](./images/image.png)

Although the first instantiation of the **HOPR network** is on the Ethereum blockchain, HOPR is _chain agnostic_**,** which means that **HOPR nodes** can eventually implement different payment channels in different blockchains.

At the time of writing, HOPR is also able to implement a [Polkadot-enabled payment gateway](https://github.com/hoprnet/hopr-polkadot).

## Contents

```eval_rst
.. toctree::
   :maxdepth: 1
   :caption: Quickstart

   src/quickstart/index.md

.. toctree::
   :maxdepth: 1
   :caption: Core HOPR Concepts

   src/core-concepts/index.md
   src/core-concepts/protocol-network-token.md
   src/core-concepts/proof-of-relay.md
   src/core-concepts/payment-channels.md
   src/core-concepts/tickets.md
   src/core-concepts/cover-traffic.md
   src/core-concepts/bootstrap-nodes.md

.. toctree::
   :maxdepth: 1
   :caption: Installing HOPRd

   src/install-hoprd/index.md
   src/install-hoprd/using-script.md
   src/install-hoprd/using-avado.md
   src/install-hoprd/using-npm.md
   src/install-hoprd/using-docker.md

.. toctree::
   :maxdepth: 1
   :caption: Running HOPRd

   src/running-hoprd/index.md
   src/running-hoprd/funding/native-tokens.md
   src/running-hoprd/funding/hopr-tokens.md
   src/running-hoprd/commands.md
   src/running-hoprd/flags.md
```
