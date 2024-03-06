// You can't access DOM with the main process, but you can acces the node.js APIs

// imports
const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require('node:path');

/**
 * writes a reusable function to instantiate windows
 */
const createWindow = () => {
	const win = new BrowserWindow(
		{
			width: 1200,
			height: 980,
			backgroundColor: '#AFEFEF',
			webPreferences: {
				// __dirname : string => points to the path of the currently executing script (/root here)
				preload: path.join(__dirname, 'preload.js')
			}
		}
	);

	win.loadFile('index.html');
}

app.whenReady().then(
	() => {
		ipcMain.handle('ping', () => 'pong');

		createWindow()
		
		app.on('activate', () => {
			if (BrowserWindow.getAllWindows().length === 0) {
				createWindow();
			}
		}
	);
});

// listens for the close "window-App" button
app.on('window-all-closed', () => {
	
	console.log("I'm closing...");
	if (process.platform !== 'darwin') {
		app.quit();
	}
})