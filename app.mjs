
import { readFileSync } from 'fs';

function readAndPrintFile(filePath) {
  try {
    const data = readFileSync(filePath, 'utf-8');
    console.log('File Content:', data);
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
}

const filePath = 'example.txt';
readAndPrintFile(filePath);
