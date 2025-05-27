import fs from 'fs/promises';  // IMPORTANT: add this line to fix the missing FS import !!!

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'hello.txt');

// writing to a file safely
try {
    fs.writeFileSync(filePath, 'Hello, Node.js beginner!!', 'utf8');
    console.log('✅ File written successfully.');
} catch (err){
    console.error('❌ Error writing file:', err.message);
}

// Reading from a file safely
try{
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('📄 File content:\n', data);
} catch (err)
{
    console.error('❌ Error reading file:', err.message);
}