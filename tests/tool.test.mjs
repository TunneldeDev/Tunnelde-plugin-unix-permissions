import assert from "node:assert/strict";
import { test } from "node:test";
import { calculate as permissions } from "../tool.mjs";

test("all 4096 Unix permission modes round trip, including special bits without execute", () => {
  for (let n = 0; n < 4096; n++) {
    const s = n.toString(8).padStart(4, "0"),
      r = permissions(s, {}).text;
    assert.equal(permissions(r.split("\n")[0].split("  ")[1], {}).text, r);
  }
  assert.match(permissions("4644", {}).text, /rwSr--r--/);
  assert.equal(permissions("99", {}).error, true);
});