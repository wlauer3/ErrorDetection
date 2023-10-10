const { app, BrowserWindow} = require("electron");
const url = "http://localhost:5173/";


function createWindow() {
    mainWindow = new BrowserWindow({
      width: 1000,
      height: 900,
      resizable: false,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    });
  
    // mainWindow.setMenu(null);
    mainWindow.loadURL(url);
  }
  
  app.whenReady().then(() => {
    createWindow();
  
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
  
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
