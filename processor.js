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
      let tempString = magicString.toString();

      const componentNames = tempString.match(/(templateUrl:'.)(.*)(.component.html')/g);

      if(componentNames) {
        const start = tempString.indexOf(componentNames[0]);
        const end = start + componentNames[0].length;

        const componentName = componentNames[0].substring(15, componentNames[0].length-16);
        if(componentName == 'my') return;

        let componentTemplate;

        if(componentName == 'app') {
          componentTemplate = fs.readFileSync(__dirname + `/src/app/${componentName}.component.html`);
        }
        else {
          componentTemplate = fs.readFileSync(__dirname + `/src/app/components/${componentName}/${componentName}.component.html`);
        }

        let newString = `template: \`${componentTemplate}\``

        magicString.overwrite(start, end, newString);
      }

      return {
        code: magicString.toString(),
        map: magicString.generateMap()
      }
    }
  }
}
