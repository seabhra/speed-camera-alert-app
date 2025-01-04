const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');
const distDir = path.join(projectRoot, 'dist');
const assetsDir = path.join(srcDir, 'assets');

module.exports = {
    projectRoot,
    srcDir,
    distDir,
    assetsDir
};