const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const readline = require('readline');

const { Cite } = require('@citation-js/core')
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')

// Entry point
async function main() {
  try {
    const people = JSON.parse(fs.readFileSync('./people.json', 'utf-8'));
    const files = await glob('data/**/*.txt');
    for (const file of files) {
      await processFile(file, people);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

// Function to process a single file
async function processFile(filePath, people) {
  const readStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: readStream });

  const stem = path.basename(filePath, path.extname(filePath));
  console.log("##", stem, "\n")
  for await (const line of rl) {
    const processed = await retrieveCitation(line);
    console.log("-", highlightMatches(processed, people))
  }
}

function highlightMatches(text, words) {
  if (!text || !Array.isArray(words) || words.length === 0) return text;

  const escapedWords = words.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');

  return text.replace(regex, '**$1**');
}

// Function to process a single line
async function retrieveCitation(line) {
  const citation = line.trim()
  const data = await Cite.async(citation)
  return data.format('bibliography', {
    format: 'text',
    template: 'apa',
    lang: 'en-US'
  })
};

main();
