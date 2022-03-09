# hip2-hns

Handshake specific implementation of [HIP2](https://hsd-dev.org/HIPs/proposals/0002/) with input and output validation.

## Usage

```js
import hip2 from 'hip2-hns';

await hip2('iamfernando', { dns: ['203.28.246.143'] }); // hs1qshuyulxra3pqpwr40303t8pn79232zztuk4qgz
await hip2('hs1qshuyulxra3pqpwr40303t8pn79232zztuk4qgz'); // Error: "hs1qshuyulxra3pqpwr40303t8pn79232zztuk4qgz" is a valid address and can't be used as HIP2
await hip2('hs1qshuyulxra3pqpwr40303t8pn79232zztuk4qgz', { strict: false }); // hs1qshuyulxra3pqpwr40303t8pn79232zztuk4qgz
```
