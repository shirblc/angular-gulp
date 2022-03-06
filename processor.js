const MagicString = require("magic-string");
const fs = require("fs");

/*
  Function Name: replaceTemplateUrl()
  Function Description: Rollup plugin that replaces the Angular templateUrl
                        in test files with the inlined template.
                        Originally written as a Browserify transform:
                        https://github.com/shirblc/angular-gulp/pull/1
  Parameters: None.
  ----------------
  Programmer: Shir Bar Lev.
  ----------------
  Inspited by @rollup/plugin-replce
  https://github.com/rollup/plugins/blob/master/packages/replace/src/index.js
*/
exports.replaceTemplateUrl = function() {
  return {
    name: 'replacer',
    transform(code) {
      const magicString  = new MagicString(code);

      magicString.replace(/(templateUrl:'.)(.*)(.component.html')/, (match) => {
        const componentName = match.substring(15, match.length-16);
        if(componentName == 'my') return match;

        const componentTemplateURL = componentName == 'app'
          ? __dirname + `/src/app/${componentName}.component.html`
          : __dirname + `/src/app/components/${componentName}/${componentName}.component.html`;

        componentTemplate = fs.readFileSync(componentTemplateURL);

        return `template: \`${componentTemplate}\``;
      })

      return {
        code: magicString.toString(),
        map: magicString.generateMap()
      }
    }
  }
}


/*
  Function Name: setProductionEnv()
  Function Description: Sets the angular environment to production.
                        Originally written as a Browserify transform:
                        https://github.com/sendahug/send-hug-frontend/blob/dev/gulpfile.js#L233
  Parameters: None.
  ----------------
  Programmer: Shir Bar Lev.
*/
exports.setProductionEnv = function() {
  return {
    name: 'production-setter',
    transform(code) {
      const magicString = new MagicString(code);
      let tempString = magicString.toString();

      const environment = tempString.match(/environments\/environment/);

      if(environment) {
        const start = environment.index;
        const end = start + environment[0].length;
        const newString = `environments/environment.prod`;

        magicString.overwrite(start, end, newString);
      }

      return {
        code: magicString.toString(),
        map: magicString.generateMap()
      }
    }
  }
}
