# Commands

This page gives a short overview of the different commands you can run from your node, and the syntax for using them.

```eval_rst
.. ATTENTION::
   If you've used previous versions of HOPR based around the HOPR Chat app, please be aware that the syntax for many commands has changed. In particular, all commands which required multiple inputs in HOPR Chat must be entered on a single line in hoprd.
```

To access the list of available commands, type `help`. If you incorrectly enter a command, your node will try to suggest the correct syntax. The list below is grouped by function.

## info

Type `info` to display information about your HOPR Node, including the bootstrap node it's currently connected to.

## version

Type `version` to see the version of hoprd that you're running.

## address

Type `address` to see the two addresses associated with your node.

The top address is your HOPR address, which is used for interacting with other nodes in the HOPR network which includes sending and receiving messages. By default, this only shows the last five characters. Click them to expand and see the full address.

The bottom address is your native address, used for funding with native and HOPR tokens.

```eval_rst
.. ATTENTION::
   The HOPR client is still under development. Please do NOT add funds to the HOPR node that you can't lose.
```

## settings

Type `settings` to see your current settings. This will show whether you're currently including your address with sent messages (includeRecipient true / false), and your current channel opening strategy (promiscuous / passive). To change your `includeRecipient` setting, type `settings includeRecipient true` or `settings includeRecipient false`. To change your funding strategy, type `settings strategy promiscuous` or `settings strategy passive`.

#### Passive and Promiscuous strategies

By default, hoprd runs in `passive` mode, this means that your node will not attempt to open or close any channels automatically. When you set your strategy to `promiscuous` mode, your node will attempt to open channels to a _randomly_ selected group of nodes which you have a healthy connection to. At the same time, your node will also attempt to close channels that are running low on balance or are unhealthy.

## ping

Type `ping [HOPR address]` to attempt to ping another node. You should receive a pong and a latency report. This can be used to assess the health of the target node and your own node.

## peers

Type `peers` to see a list of nodes your node has discovered and established a connection to. Your node will use this list of peers when it attempts to send and route messages and automatically open payment channels.

## send

Type `send [HOPR address] [message]` to send a message to the specified HOPR address. If you want them to know who sent it, ensure that you've set your `includeRecipient` setting to `true`. Your node will attempt to find the best route to send this message based on its knowledge of the network.

## alias

You can use the alias command to give an address a more memorable name. Type `alias [address] [alias]`. And your node will assign the alias to that address. You can now use that alias in commands like `send`, instead of typing the full address. Note that these aliases are not available publicly, and will reset when you restart your node.

## balance

Type `balance` to display your current HOPR and native balances.

```eval_rst
.. ATTENTION::
   The HOPR client is running by default on xDAI, so `balance` will show the *xDAI* balance as well as the *wxHOPR* balance. For more information see `here <./funding/hopr-tokens.html#xhopr-on-xdai>`_
```

## withdraw

Type `withdraw [amount] [native / hopr] [address]` to withdraw the specified amount of native or HOPR tokens to the target address. Ensure you have sufficient native tokens in your balance to pay for the gas fees.

## open

Type `open [HOPR addresss] [HOPR amount]` to manually open a payment channel to the specified node and fund it with the specified amount of HOPR tokens. Make sure you have sufficient native tokens to pay the gas fees.

## fund

Type `fund [HOPR addresss] [HOPR amount] [HOPR counterparty amount]` to manually open a payment channel to the specified node and fund it with the specified amount of HOPR tokens. Make sure you have sufficient native tokens to pay the gas fees. If amount for counterparty is provided, two channels will be opened.

## channels

Type `channels` to see your currently open channels. You'll see the node that each channel is open to and the amount with which they're funded.

## close

Type `close [HOPR address]` to close an open channel. Once you've initiated channel closure, you have to wait for a specified closure time, then you may send the command again to finalize closure. This is a cool down period to give the other party in the channel sufficient time to redeem their tickets.

## tickets

Type `tickets` to display information about your redeemed and unredeemed tickets. Tickets are earned by relaying data and can be redeemed for HOPR tokens.

## redeemTickets

Type `redeemTickets` to attempt to redeem your earned tickets for HOPR. Make sure you have sufficient native currency in your balance to cover the gas fees.

## covertraffic

This feature is work in progress and may contain bugs.

Type `covertraffic start` to begin generating cover traffic messages. Type `covertraffic stop` to stop the cover traffic. You can type `covertraffic stats` to see the current status and reliability of your cover traffic.

## quit

Type `quit` to terminate your node.
