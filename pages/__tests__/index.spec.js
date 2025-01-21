import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import index from "../index.vue";

describe("LoginPage", () => {
  let mainPage;

  beforeAll(async () => {
    mainPage = await mountSuspended(index);
  });

  test("renders correctly", () => {
    expect(mainPage.exists()).toBe(true);
  });
});
