//@vitest-environment nuxt

import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { createPinia, setActivePinia } from 'pinia';
import login from "../login.vue";
import { setActivePinia } from "pinia";
import { mount } from "@vue/test-utils";



describe("Login access", () => {
    let wrapper;

    beforeAll(() => {
        setActivePinia(createPinia());
        wrapper = mount(login);
    });

    afterAll(() => {
        wrapper.unmount();
    });


    test('render correctly', async () => {
        expect(wrapper.exists()).toBe(true);

        const form = wrapper.find('form');
        expect(form.exists()).toBe(true);

        const emailInput = wrapper.find('input[type="email"]');
        expect(emailInput.exists()).toBe(true);

        const passwordInput = wrapper.find('input[type="password"]');
        expect(passwordInput.exists()).toBe(true);

        const forgotPasswordText = wrapper.find('.forgot-password');
        expect(forgotPasswordText.exists()).toBe(true);

        const registerText = wrapper.find('main > p');
        expect(registerText.exists()).toBe(true);

        const button = wrapper.find('form > button');
        expect(button.exists()).toBe(true);
        expect(button.text()).toBe('Login');

        await emailInput.setValue('test@test.com');
        await passwordInput.setValue('12345678');

        await button.trigger('click');
        expect(wrapper.emitted()).toHaveProperty('click')
        await form.trigger('submit');
        expect(wrapper.emitted()).toHaveProperty('submit')

        await new Promise(resolve => setTimeout(resolve, 100));

        const errorMessage = wrapper.find('.error-userauth');
        expect(errorMessage.exists()).toBe(true);
        expect(errorMessage.text()).toBe('Email or password incorrect');
    });

})
