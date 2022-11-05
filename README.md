# Lab 2 for the subject "User Interface Development" :straight_ruler:

:mortar_board: We did this lab in the second year of university in the fourth semester.

It was a teamwork and we were adding JavaScript to your web page. You can view our previous lab [here](https://github.com/nika-doroshkevich/RPI_Lab_1).

________________________________________________________________________________________________

What did we use :question:

:computer: __HTML__, __CSS__ and __JavaScript__

What have we done :question:

- When you click the "Watch demo video" button, a video window opens.
- The slider functions in the "Meet Client Satisfaction by using product" section.
- The fields function in the "Frequently asked questions" section.
- Each "Try for free" button opens a modal window. There is a registration form in the modal window.

### :paperclip: [This is our web page.](https://nika-doroshkevich.github.io/RPI_Lab_2/)

________________________________________________________________________________________________

Requirements for the web page:
- In this work, it is forbidden to use the following methods: innerHTML, insertAdjacentHTML and everything similar to them. Dynamic generation implies the use of createElement, appendChild, etc. methods.
- By clicking on the "Watch demo video" button, a modal window with a video (any of YouTube) should open. To close, there should be a cross and a click on the emptiness around.
- Make a functioning slider ("Meet Client Satisfaction by using product" section) with additional switching by keyboard arrows and saving the slide where the user stopped before updating the page.
- By clicking on any line of the element ("Frequently asked questions" section), a cross should disappear in the pressed line and additional text appears. At the same time, the previously expanded line should collapse again and show a cross. Updating the page should not change the last expanded line.
- Each "Try for free" button should open a modal window with a darkening of the rest of the background, completely generated using JavaScript.
In the modal window there should be a registration form with the fields: 
    - Name
    - Email
    - Phone number

The Send button at the bottom and a cross in the upper right corner. Stylize is similar to the rest of the page. Each field must have input validation, and the button must be blocked until the correct data is entered. After clicking the submit button, the modal window should show the text about the successful submission of the form and close after 5 seconds. The next time you click on the button, a message should appear for 5 seconds that the registration has already been made. Refreshing the page should not reset this.
