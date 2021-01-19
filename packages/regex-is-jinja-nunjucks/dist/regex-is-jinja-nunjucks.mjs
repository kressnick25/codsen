/**
 * regex-is-jinja-nunjucks
 * Regular expression for detecting Jinja or Nunjucks code
 * Version: 1.1.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/regex-is-jinja-nunjucks/
 */

const n="1.1.1";function o(){return/{%|{{|%}|}}/gi}export{o as isJinjaNunjucksRegex,n as version};