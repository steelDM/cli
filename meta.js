module.exports = {
  "helpers": {
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "dll": {
      "type": "confirm",
      "message": "use dll(可以支持长缓存和快速打包)?"
    }
    // ,"lint": {
    //   "type": "confirm",
    //   "message": "Use ESLint to lint your code?"
    // }
  },
  "filters": {
    "src/**/*": true
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dll(if install)\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
