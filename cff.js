const { Cite } = require('@citation-js/core')
require('@citation-js/plugin-doi')
require('@citation-js/plugin-software-formats')

if (process.argv.length < 3) {
  console.log("usage: node cff.js <doi>");
} else {
  const doi = process.argv[2];
  Cite.async(doi).then(data => {
    const bibliography = data.format('cff');
    console.log(bibliography)
  })
}
