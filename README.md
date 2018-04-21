# Amazono
Practice of Udemy - Complete Modern Amazon clone: Angular 5 and Node.js



What do I want to do? 

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

