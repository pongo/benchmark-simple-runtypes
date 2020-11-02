import { makeIOTS, makeSR, ValidatorFn } from "./index";

function validations(v: ValidatorFn) {
  expect(v({})).toBe(false);
  expect(v({ abc: 1 })).toBe(false);
  expect(v({ code: 1 })).toBe(false);
  expect(v({ code: "1" })).toBe(true);
  expect(v({ code: "1", data: { hello: "world" } })).toBe(true);
}

it("io-ts", () => {
  validations(makeIOTS());
});

it("simple-runtypes", () => {
  validations(makeSR());
});
