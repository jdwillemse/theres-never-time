import fs from 'fs';

// import 'dotenv/config';

import { getFunFact } from './src/facts.mjs';
import { factConstructor } from './src/factConstructor.mjs';

const OUTPUT_FILE = 'print-data.txt';
const ms = 60 * 60 * 1000; // milliseconds in an hour

function roundToHour(date) {
  return new Date(Math.round(date.getTime() / ms) * ms);
}

async function renderOutput(currentTime, funFact) {
  const completedFact = await factConstructor(funFact);

  return `BING BONG!

THE TIME IS NOW ${currentTime}

${completedFact}
`;
}

async function createFile() {
  // round the date because the script might not run exactly on the hour
  const currentTime = roundToHour(new Date()).toLocaleString('en-US', {
    timeZone: 'US/Central',
    hour: '2-digit',
    minute: '2-digit',
  });
  const funFact = getFunFact();
  const data = await renderOutput(currentTime, funFact);

  fs.writeFileSync(OUTPUT_FILE, data);

  console.log('File written successfully');
  console.log('------------------------');

  console.log(fs.readFileSync(OUTPUT_FILE, 'utf8'));
}

// init
createFile();
