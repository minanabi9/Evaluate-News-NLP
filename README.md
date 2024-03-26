=> Evaluate News NLP Project contains :
    * src folder
       -> client folder
          - __test__ folder
              # testFormHandler.spec.js
          - js folder
              # formHandler.js
              # textChecker.js
          - styles folder
              # base.css
              # footer.css
              # form.css
              # header.css
              # resets.css
          - views folder
              # index.html
          - index.js
       -> server folder
          - __test__ folder
              # testServerIndex.spec.js
          - index.js
          - mockAPI.js
    * .babelrc
    * .env
    * .gitignore
    * package-lock.json
    * package.json
    * README.md
    * REQUIREMENTS.md
    * webpack.dev.js
    * webpack.prod.js

=> Description of these folders and files :
    1- src folder:
         contains 2 folders: client and server.

              client folder:
                  contains 4 folders and 1 file: __test__, js, styles, views and index.js:
                        __test__ folder:
                              contains testFormHandler.spec.js file to test formHandler.js file functionality.
                        js folder:
                              contains 2 files:
                                    formHandler.js file which get the data from the server and display it on the website.
                                    textChecker.js file which check the textbox if it empty or not and alert user to insert text if the textbox is empty.
                        styles folder:
                              contains 5 files base.css, footer.css, form.css, header.css and resets.css to specify the styles of the UI.
                        views folder:
                              contains index.html file which contains all html code of the project.
                        index.js file:
                              contains all javascript code of the client side.

              server folder:
                    contains 1 folder and 2 files: __test__, index.js and mockAPI.js:
                          __test__ folder:
                                contains testServerIndex.spec.js file to test index.js file functionality.
                          index.js file:
                                contains all javascript code of the server side.
                          mockAPI.js file:
                                contains json object.

    2- .babelrc file:
          allows all babel API options.
    3- .env file:
          contains secret data.
    4- .gitignore file:
          contains all folders or files want to ignore it on git project.
    5- package-lock.json:
          describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
    6- package.json:
          must be actual JSON, not just a JavaScript object literal. Put a description in it. It's a string. This helps people discover the package.
    7- README.md file:
          contains a description of the project that I have implemented and some basic information.
    8- REQUIREMENTS.md file:
          contains all requirements of the project.
    9- webpack.dev.js:
          contains the configurations of the development mode of webpack
    10- webpack.prod.js:
          contains the configurations of the production mode of webpack

=> The project Description :
    the project analysis the given text from the user by using meaningcloud API and returning the data then display specific information from this data.
