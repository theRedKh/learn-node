console.log('Hello from electron!');
const { app, BrowserWindow } = require('electron') //importing 2 electron modules with commonjs module syntax
//app controls the app lifecycle
//BrowserWindow creates/manages a window in the app

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

//call function when app is ready
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })