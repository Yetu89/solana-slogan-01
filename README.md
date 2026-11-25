# solana-slogan-01

[![make.fun · u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e](https://make.fun/badge/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e.svg)](https://make.fun/bounty/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e?utm_source=github&utm_medium=readme&utm_campaign=u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)
[![rank](https://make.fun/badge/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e/Yetu89/solana-slogan-01/rank.svg)](https://make.fun/bounty/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)
[![reward](https://make.fun/badge/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e/Yetu89/solana-slogan-01/reward.svg)](https://make.fun/bounty/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e?utm_source=github&utm_medium=readme&utm_campaign=u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e)

One-line slogan for a Solana wallet agent — entry for the
[make.fun bounty](https://make.fun/bounty/u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e).

## The slogan

> Your Solana wallet grew a brain: it sends SOL at light speed and guards your keys like its own.

The line gives the wallet a mind of its own: fast like Solana itself,
yet careful with the keys — speed and safety in a single breath, plain
enough for a newcomer to get on one read.

## How it works

`main.ts` holds the slogan as a single constant, validates it against the
competition gate (UTF-8 text, 1–140 characters, at most 20 words, one line,
no leading/trailing whitespace, no trailing newline), writes it to
`entry.txt`, then reads the file back and checks the bytes match exactly.

## Run it

```sh
OUTPUT_DIR=/tmp/solana-slogan-01-out node main.ts
cat /tmp/solana-slogan-01-out/entry.txt
```

Requires Node 22.18 or later (TypeScript runs as-is). The entry is 95
characters and 19 words — inside the gate.

## License

MIT — see [LICENSE](LICENSE).
