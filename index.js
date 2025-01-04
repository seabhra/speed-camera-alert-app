const express = require('express'); // Certifique-se de importar o Express
const app = express(); // Crie uma instância do Express
const connectDB = require('./src/database/connect'); // Importa a função de conexão com o MongoDB
const Person = require('./src/models/Person'); // Importa o modelo Person
const FileManager = require('./src/modules/test/fs'); // Importa a classe FileManager
const PathManager = require('./src/modules/test/path'); // Importa a classe PathManager
const HttpClient = require('./src/modules/http'); // Importa a classe HttpClient
const port = 5000; // ou qualquer porta que você queira usar
const dotenv = require('dotenv');

dotenv.config();
connectDB();

// Middlewares para processar dados JSON e dados de formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura o EJS como o mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', './views');

// Rota para o mapa
app.get('/map', (req, res) => {
  res.sendFile(__dirname + '/public/map.html');
});

// Rota para criar uma nova pessoa
app.post('/person', async (req, res) => {
  try {
    const { name, age } = req.body;
    const person = new Person({ name, age });
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para obter todas as pessoas
app.get('/persons', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para ler um arquivo
app.get('/read-file', async (req, res) => {
  try {
    const data = await FileManager.readFile('./src/modules/test/test.txt');
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para escrever em um arquivo
app.get('/write-file', async (req, res) => {
  try {
    const message = 'Hello, this is a sample text!';
    await FileManager.writeFile('./src/modules/test/test.txt', message);
    res.send('File written successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para adicionar dados a um arquivo
app.get('/append-file', async (req, res) => {
  try {
    const message = '\nThis is an appended text!';
    await FileManager.appendToFile('./src/modules/test/test.txt', message);
    res.send('Data appended successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para deletar um arquivo
app.get('/delete-file', async (req, res) => {
  try {
    await FileManager.deleteFile('./src/modules/test/test.txt');
    res.send('File deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para testar a classe PathManager
app.get('/path-info', (req, res) => {
  const filePath = './src/modules/test/test.txt';
  const baseName = PathManager.getBaseName(filePath);
  const dirName = PathManager.getDirName(filePath);
  const extName = PathManager.getExtName(filePath);
  const joinedPath = PathManager.joinPaths(__dirname, 'src', 'modules', 'test', 'test.txt');
  const resolvedPath = PathManager.resolvePath('src', 'modules', 'test', 'test.txt');

  res.json({
    baseName,
    dirName,
    extName,
    joinedPath,
    resolvedPath
  });
});

// Rota para testar a classe HttpClient
app.get('/http-get', async (req, res) => {
  try {
    const data = await HttpClient.get('https://jsonplaceholder.typicode.com/posts/1');
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota de teste para verificar a integração com o Mongoose
app.get('/test-mongoose', async (req, res) => {
  try {
    // Cria uma nova pessoa
    const person = new Person({ name: 'Test User', age: 25 });
    await person.save();

    // Recupera a pessoa criada
    const foundPerson = await Person.findOne({ name: 'Test User' });
    res.json(foundPerson);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Rota para criar um novo usuário
app.post('/user', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  // Aqui você pode adicionar a lógica para salvar o usuário no banco de dados
  res.status(201).json({ message: 'User created successfully', user: { firstName, lastName, email } });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
