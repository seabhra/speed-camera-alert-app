const mkdirp = require('mkdirp');
const path = require('path');

// Caminho do diretório que você quer criar
const dirPath = path.join(__dirname, 'teste', 'subdiretorio', 'outro');

// Função assíncrona para criar o diretório
mkdirp(dirPath, (err) => {
    if (err) {
        console.error('Erro ao criar diretório:', err);
    } else {
        console.log('Diretório criado com sucesso:', dirPath);
    }
});

// Versão com Promises para Node.js v10+
mkdirp(dirPath).then(() => {
    console.log('Diretório criado com sucesso usando Promises:', dirPath);
}).catch((err) => {
    console.error('Erro ao criar diretório com Promises:', err);
});

// Usando async/await (Node.js v10+)
async function createDir() {
    try {
        await mkdirp(dirPath);
        console.log('Diretório criado com sucesso usando async/await:', dirPath);
    } catch (err) {
        console.error('Erro ao criar diretório usando async/await:', err);
    }
}

createDir();