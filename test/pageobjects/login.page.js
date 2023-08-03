const loginPageLocators = {
    emailInput: 'input[type="email"]',
    password_input: 'input[type="password"]',
    submit_button: 'button[type="submit"]',
}


class LoginPage {

    async visitUrl(value) {
        await browser.url(value);
        return this;
    }

    async fillEmailInput(value) {
        await $(loginPageLocators.emailInput).setValue(value)
        return this
    }

    async fillPasswordInput(value) {
        await $(loginPageLocators.password_input).setValue(value)
        return this;
    }

    async clickSubmitButton() {
        await $(loginPageLocators.submit_button).click()
        return this;
    }
    
    // async login () {
    //     await this.inputUsername.setValue('imartynenko+carrier11@zuumapp.com');
    //     await this.inputPassword.setValue('Ghjcnjqgfhjkm2!');
    //     await this.btnSubmit.click();
    // }
}

export default new LoginPage();
