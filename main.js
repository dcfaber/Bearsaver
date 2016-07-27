const electron = require('electron')
const {app, BrowserWindow} = electron

const videoLink = 'https://www.youtube.com/embed/gtUucAcQoaE?hd=1&autoplay=1'

app.on('ready', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  let videoWin = new BrowserWindow({width: 800, height: 600, fullscreen: true})
  videoWin.setMenu(null);
  let signalWin = new BrowserWindow({width: 1, height:1, x: -9999, y: -9999, fullscreen: false})
  videoWin.loadURL(videoLink)
  signalWin.loadURL('index.html')

  signalWin.on('blur', () => {
    if (process.platform != 'darwin')
      app.quit();
  });
});
