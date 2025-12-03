# https://www.npmjs.com/package/jasmine
# https://jasmine.github.io/

# list of all packages
npm list -g

npm install -g jasmine
npm install --save-dev jasmine

jasmine init
npx jasmine init

npx jasmine examples

jasmine
npx jasmine
jasmine ./spec/sumar.spec.js
jasmine --random=false ./spec/test.spec.js




# dependencia que nos permite visualizar los resultados
# de los test de una forma amigable
npm install --save-dev jasmine-browser-runner jasmine-core

npx jasmine-browser-runner init
# ES Module
npx jasmine-browser-runner init --esm


# comando para correr los test
npx jasmine-browser-runner serve