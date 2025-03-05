# Lavaporeria
Silvit practice lavaporeria

# Pre- Requisits
Have nodejs LTS installed

# Intallation
On the root of the project run npm install

# Running the tests
run npm run dev & npm run cypress:open this will have the web server running at the same time as the Cypress UI opens and you can run the tests.
NOTE: Headless mode won't work because it won't have the Redux Dev Tools and the tests will fail

# Approach
I chose to use a Page Object Model kind of approach 

The way I did this was to create a file per component in the pageobjects folder and imported them into support/index.js

(homepage-vape.js, .js, .js)
and I added the different relevant selectors and contextually relevant functions in said files. Notice that any spec file will have access to all page objects which is not ideal, but it can be useful if you wish to write more integration-style-tests.me I would have probably found a way to make this work, but for the sake of completing the exercise in a timely manner I'd say install the plugin on the Cypress Chrome instance.

Under the e2e folder you will find the 3 Spec files matching the previously mentioned Page Object files

# Page
https://lavaporeria.com/
