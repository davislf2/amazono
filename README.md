# Amazono
Practice of Udemy - Complete Modern Amazon clone: Angular 5 and Node.js



TODO:

1. How to debug if it doesnt' connect to MongoDB?



Questions:

1. Can I do npm and yarn in the same project?



DONE:

1. ```sh
   npm install -g prettier
   # install globally
   # then it can use prettier commands
   prettier --single-quote --write "server/*.js"
   yarn add lint-staged husky --dev
   ```

2. Add husky in config for prettier before precommit 

   ```js
     "scripts": {
       "precommit": "lint-staged",
     },
     "lint-staged": {
       "*.js": [
         "prettier --write",
         "git add"
       ]
     },
   ```

   Ref: https://kaddopur.github.io/blog/2017/05/10/prettier/

3. Mocha and Chai for unit test

   ```sh
   npm install mocha -g      	# mocha execution should install globally
   npm install mocha --save-dev
   npm install should --save-dev
   ```

   Ref: https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai

4. Don't put node_modules into git

   ```sh
   cd ..
   echo './server/node_modules' > .gitignore
   ```

   ​



ARCHIVE:

1. GET a json response
2. Setting up mlab https://mlab.com/
   da…2 -> AWS -> sandbox -> US East (Virginia, us-east-1)
   DBName: amazono-app
   Collection: davis
   Database Users: davislf2, pw: db123
3. Install cors: communicate between front-end and back-end because they are in different domains and ports.


1. Build a Node.js server
2. Install Prettier & ESLint
   1. Prettier do: **Formatting rules**: eg: [max-len](http://eslint.org/docs/rules/max-len), [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs), [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing), [comma-style](http://eslint.org/docs/rules/comma-style)...
   2. Linter do: **Code-quality rules**: eg [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars), [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind), [no-implicit-globals](http://eslint.org/docs/rules/no-implicit-globals), [prefer-promise-reject-errors](http://eslint.org/docs/rules/prefer-promise-reject-errors)...
3. Install Mocha, Chai, Sinon for unit test



```sh
npm install --save-dev --save-exact prettier
# Also install on VSCode
npm install eslint-config-airbnb-base eslint-plugin-import eslint --save-dev
npm install mocha chai sinon --save-dev
```



VSCode Prettier

```sh
Using Command Palette (CMD/CTRL + Shift + P)
1. CMD + Shift + P -> Format Document
OR
1. Select the text you want to Prettify
2. CMD + Shift + P -> Format Selection
```

