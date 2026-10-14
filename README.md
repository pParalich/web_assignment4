# Assignment #4. Forms and Validation

- **Name:** Tleubay Abilmansur
- **Group:** SE2540
- **Link:** https://pparalich.github.io/web_assignment4/

## Task 0. Simple Contact Form

Create a contact form with Name, Email, Message and a Submit button. All fields must have `<label>` elements.

I made the form with three fields, each label is linked to its input via `for` and `id`.

![Task 0 Screenshot](./images/image.png)

## Task 1. Form with HTML5 Validation

Add built-in validation attributes (`required`, `type`, `maxlength`, etc.) and test how the browser enforces them.

I added `required`, `minlength`, `maxlength` and `type="email"`. The browser blocks the submit and shows an error for empty fields and a wrong email.

![Task 1 Screenshot](./images/image1.png)

## Task 2. Bootstrap Form Styling

Recreate the form with Bootstrap classes, use the grid, add placeholders and helper text.

Name and Email are in a `row` with `col-md-6` columns, fields use `form-control`, and the email has a `form-text` hint.

![Task 2 Screenshot](./images/image3.png)

## Task 3. Bootstrap Validation Styles

Apply `is-valid` / `is-invalid` classes, show feedback messages below inputs and test with valid and invalid data.

The form has `novalidate`. The function `checkInput` in `script.js` uses `checkValidity()` and sets `is-valid` or `is-invalid` on every input and on submit. Messages are in `valid-feedback` and `invalid-feedback` blocks.

![Task 3 Screenshot](./images/image4.png)

## Task 4. Registration Form

Create a registration form (First/Last Name, Email, Password + Confirm, Gender radio, Hobbies checkboxes, Country select, Submit and Reset), make it responsive with the Bootstrap grid, and add HTML5 validation and Bootstrap feedback.

Fields are in `col-md-6` columns. The password has `minlength="6"`, and Confirm Password uses `setCustomValidity()` to mark a mismatch. Radio buttons are checked separately in `checkGender()`, because feedback is attached to one input and a radio group has several. Reset clears all validation states.

![Task 4 Screenshot](./images/image5.png)

## Summary

First I made the plain forms and tested the browser validation. Then I rebuilt the form with Bootstrap and its grid. For Task 3 and 4 I turned off the default validation with `novalidate` and wrote JavaScript with `checkValidity()`. The hardest parts were password confirmation and radio buttons. At the end I tested all forms with empty, wrong and correct data.

## Files

`index.html`, `style.css`, `script.js`, `images/` (screenshots). Open `index.html` in a browser, internet is needed for the Bootstrap CDN.