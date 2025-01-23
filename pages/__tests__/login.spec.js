//@vitest-environment nuxt

import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import login from "../login.vue";
import { setActivePinia } from "pinia";
import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";

describe("Login access", () => {
  let wrapper;

  beforeEach(async () => {
    setActivePinia(createPinia());
    wrapper = await mountSuspended(login);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("render correctly", async () => {
    expect(wrapper.exists()).toBe(true);

    const form = wrapper.find("form");
    expect(form.exists()).toBe(true);

    const emailInput = wrapper.find('input[type="email"]');
    expect(emailInput.exists()).toBe(true);

    const passwordInput = wrapper.find('input[type="password"]');
    expect(passwordInput.exists()).toBe(true);

    const forgotPasswordLink = wrapper.find(".forgot-password");
    expect(forgotPasswordLink.exists()).toBe(true);

    const registerText = wrapper.find("main > p");
    expect(registerText.exists()).toBe(true);

    const registerLink = wrapper.find("a[href='/register']");
    expect(registerLink.exists()).toBe(true);

    const button = wrapper.find("form > button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe("Login");

    await emailInput.setValue("test@test.com");
    await passwordInput.setValue("12345678");

    await button.trigger("click");
    await form.trigger("submit");

    await new Promise((resolve) => setTimeout(resolve, 100));

    const errorMessage = wrapper.find(".error-userauth");
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toBe("Email or password incorrect");
  });

  describe("Wrong inputs", () => {
    test("empty email message", async () => {
      const form = wrapper.find("form");
      const emailInput = wrapper.find('input[type="email"]');
      const passwordInput = wrapper.find('input[type="password"]');

      await passwordInput.setValue("password");
      expect(emailInput.element.value).toBe("");
      await form.trigger("submit");

      await new Promise((resolve) => setTimeout(resolve, 100));

      const errorMessage = wrapper.find(".error-userauth");
      expect(errorMessage.exists()).toBe(true);
      expect(errorMessage.text()).toBe("Email or password incorrect");
    });

    test("empty password message", async () => {
      const form = wrapper.find("form");
      const passwordInput = wrapper.find('input[type="password"]');
      const emailInput = wrapper.find('input[type="email"]');

      await emailInput.setValue("test@test.com");
      expect(passwordInput.element.value).toBe("");
      await form.trigger("submit");

      await new Promise((resolve) => setTimeout(resolve, 100));

      const errorMessage = wrapper.find(".error-userauth");
      expect(errorMessage.exists()).toBe(true);
      expect(errorMessage.text()).toBe("Email or password incorrect");
    });

    test("empty password and email message", async () => {
      const form = wrapper.find("form");
      const passwordInput = wrapper.find('input[type="password"]');
      const emailInput = wrapper.find('input[type="email"]');

      expect(emailInput.element.value).toBe("");
      expect(passwordInput.element.value).toBe("");
      await form.trigger("submit");

      await new Promise((resolve) => setTimeout(resolve, 100));

      const errorMessage = wrapper.find(".error-userauth");
      expect(errorMessage.exists()).toBe(true);
      expect(errorMessage.text()).toBe("Email or password incorrect");
    });

    test("wrong email message", async () => {
      const form = wrapper.find("form");
      const passwordInput = wrapper.find('input[type="password"]');
      const emailInput = wrapper.find('input[type="email"]');

      await emailInput.setValue("test@notest.com");
      await passwordInput.setValue("12345678");
      await form.trigger("submit");

      await new Promise((resolve) => setTimeout(resolve, 100));

      const errorMessage = wrapper.find(".error-userauth");
      expect(errorMessage.exists()).toBe(true);
      expect(errorMessage.text()).toBe("Email or password incorrect");
    });

    test("wrong password message", async () => {
      const form = wrapper.find("form");
      const passwordInput = wrapper.find('input[type="password"]');
      const emailInput = wrapper.find('input[type="email"]');

      await emailInput.setValue("test@test.com");
      await passwordInput.setValue("76543");
      await form.trigger("submit");

      await new Promise((resolve) => setTimeout(resolve, 100));

      const errorMessage = wrapper.find(".error-userauth");
      expect(errorMessage.exists()).toBe(true);
      expect(errorMessage.text()).toBe("Email or password incorrect");
    });

    test("wrong email and password message", async () => {
      const form = wrapper.find("form");
      const passwordInput = wrapper.find('input[type="password"]');
      const emailInput = wrapper.find('input[type="email"]');

      await emailInput.setValue("test@notest.com");
      await passwordInput.setValue("76543");
      await form.trigger("submit");

      await new Promise((resolve) => setTimeout(resolve, 100));

      const errorMessage = wrapper.find(".error-userauth");
      expect(errorMessage.exists()).toBe(true);
      expect(errorMessage.text()).toBe("Email or password incorrect");
    });
  });
  describe("Correct input", () => {
    test("correct input", async () => {
      const form = wrapper.find("form");
      const passwordInput = wrapper.find('input[type="password"]');
      const emailInput = wrapper.find('input[type="email"]');

      await emailInput.setValue("ecollazodominguez@gmail.com");
      await passwordInput.setValue("12345678");
      await form.trigger("submit");

      await nextTick();

      const errorMessage = wrapper.find(".error-userauth");
      expect(errorMessage.exists()).toBe(false);
      expect(useRoute().path).toBe("/");
    });
  });
  describe("<a> links", () => {
    test("forgot password link", async () => {
      const forgotPasswordLink = wrapper.find(".forgot-password");
      expect(forgotPasswordLink.element.href).toBe(
        "http://localhost:3000/recover-password"
      );
    });

    test("register link", async () => {
      const registerLink = wrapper.find("a[href='/register']");
      expect(registerLink.element.href).toBe("http://localhost:3000/register");
    });
  });
});
