# Lab8_Starter
Jonathan Deguzman

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? Within a Github action

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, because this would test a feature that has many moving parts within it

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
Yes, because this test only a single behavior/part

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
The tests would run without browser UI

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
document.querySelector("img").click();
