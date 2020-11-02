import * as t from "io-ts";
import { isRight } from "fp-ts/Either";
import * as st from "simple-runtypes";

export type ValidatorFn = (msg: Record<string, unknown>) => boolean;

export function makeIOTS(): ValidatorFn {
  const messageCodec = t.exact(
    t.intersection([
      t.type({
        code: t.string,
      }),
      t.partial({
        data: t.unknown,
      }),
    ])
  );
  // type Message = t.TypeOf<typeof messageCodec>;

  return (msg) => isRight(messageCodec.decode(msg));
}

export function makeSR(): ValidatorFn {
  const messageST = st.sloppyRecord({
    code: st.string(),
    data: st.optional(st.unknown()),
  });
  // type Message = ReturnType<typeof messageST>;

  return (msg) => {
    try {
      messageST(msg);
      return true;
    } catch {
      return false;
    }
  };
}
