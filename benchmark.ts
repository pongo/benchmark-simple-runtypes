process.env.NODE_ENV = "production";

import b from "benny";
import { makeIOTS, makeSR } from "./index";

async function bench() {
  const iots = makeIOTS();
  const sr = makeSR();

  return b.suite(
    "vals",

    b.add("io-ts", () => {
      iots({ code: "1" });
      iots({ code: "1", data: { hello: "world" } });
    }),
    b.add("io-ts incorrect", () => {
      iots({});
      iots({ abc: 1 });
      iots({ code: 1 });
    }),

    b.add("simple-runtypes", () => {
      sr({ code: "1" });
      sr({ code: "1", data: { hello: "world" } });
    }),
    b.add("simple-runtypes incorrect", () => {
      sr({});
      sr({ abc: 1 });
      sr({ code: 1 });
    }),

    b.cycle(),
    b.complete(),
    b.save({ file: "result", version: "1.0.0" }),
    b.save({ file: "result", format: "chart.html" })
  );
}

bench().catch(console.error);
