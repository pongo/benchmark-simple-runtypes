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
  473 114 ops/s, ±1.77%     | 68.96% slower

io-ts incorrect:
  375 343 ops/s, ±2.32%     | slowest, 75.37% slower

simple-runtypes:
  1 524 091 ops/s, ±3.48%   | fastest

simple-runtypes incorrect:
  1 021 229 ops/s, ±1.75%   | 32.99% slower
```

![chart](https://user-images.githubusercontent.com/142528/98253135-b86d0600-1f8b-11eb-82e7-bdefda0d29ed.png)
