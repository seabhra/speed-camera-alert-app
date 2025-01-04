const fs = require('fs');
const path = require('path');

class FileManager {
  static readFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  static writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve('File written successfully');
        }
      });
    });
  }

  static appendToFile(filePath, data) {
    return new Promise((resolve, reject) => {
      fs.appendFile(filePath, data, 'utf8', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve('Data appended successfully');
        }
      });
    });
  }

  static deleteFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.unlink(filePath, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve('File deleted successfully');
        }
      });
    });
  }
}

module.exports = FileManager;
(async () => {
  const filePath = path.join(__dirname, 'test.txt');
  try {
    await FileManager.writeFile(filePath, 'hello node!\n');
    await FileManager.appendToFile(filePath, 'hello world!\n');
    console.log('File operations completed successfully');
  } catch (error) {
    console.error('Error during file operations:', error);
  }
})();