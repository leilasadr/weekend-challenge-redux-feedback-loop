The form is divided into four different views, which means that the user will complete the feedback process in four separate steps.

[] Use Redux to store the feedback data across the different views.

*** each part of the form should be at its own route:

[✅🥳] Create your database and tables using the provided `data.sql` file.


[✅🥳] npm install
[✅🥳] npm install redux@4 react-redux@7 redux-logger@3
[✅🥳] npm run server
[✅🥳] npm run client

1- Create a feedback form that collects feedback over four different views:

    [] Feeling-How are you feeling today? 
       [] Input validation

        [] Clicking next should move the user to the appropriate step in the process.

    [] Understanding-How well are you understanding the content? 
        [] Input validation

        [] Clicking next should move the user to the appropriate step in the process.

    [] Support-How well are you being supported? 
        [] Input validation

        [] Clicking next should move the user to the appropriate step in the process.

    [] Comments-Any comments you want to leave? 
        **NO Input validation necessary 

        [] Clicking next should move the user to the appropriate step in the process.

2- Display the current feedback values on a separate review page 

    *** The last step of the process will allow the user to review their feedback. Users are not able to change their input on this step or go back for Base Mode:

    [] Review component

3- Submit their responses.

    [] A Submit button
        *** When clicked, it'll submit the completed feedback to the server

4-Save the collected feedback in a database.
    [] When the submit button is clicked, save the submission in the database. 
        [] The user should see a submission success page. 
        [] They can then click the button to take a new survey, which needs to reset all the data and go back to the first step.



