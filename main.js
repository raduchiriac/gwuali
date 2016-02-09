const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

require('crash-reporter').start({
  productName: 'Gwuli',
  companyName: 'Highest Mention',
  submitURL: 'https://raduchiriac.me',
  autoSubmit: false
});

var mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});