# benchmark-simple-runtypes

## Packages

* [io-ts](https://github.com/gcanti/io-ts)
* [simple-runtypes](https://github.com/hoeck/simple-runtypes)

## Run benchmark

* `npm install`
* `npm start`

## Benchmark results

```
io-ts:
  411 687 ops/s, ±3.41%     | 65.23% slower

io-ts incorrect:
  337 105 ops/s, ±2.82%     | 71.53% slower

simple-runtypes:
  1 184 016 ops/s, ±3.22%   | fastest

simple-runtypes incorrect:
  4 202 ops/s, ±5.81%       | slowest, 99.65% slower
```

![chart](https://user-images.githubusercontent.com/142528/97901834-c1709400-1d4d-11eb-8066-09f72aad211d.png)
