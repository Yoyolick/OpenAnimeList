const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "aqua.ico",
    //resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.removeMenu()
  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
//todo
//better gear icon
//maybe rework when to use id vs class
//find a better place for settings
//hide scrollbar
//rework back colors to be brighter less dull teal
//login system
//sign in page
//other pages
//organize shitty code
//add build version
//write js code for server calls https://www.youtube.com/watch?v=oxZ5lIk4B38&ab_channel=OverSeasMedia
//random color theme and waifu in the corner every time you reload
//blue aqua red megumin yellow darkness white emilia light blue rem