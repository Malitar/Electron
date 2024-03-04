// imports
const { app, BrowserWindow } = require('electron/main');

// writes a reusable function to instantiate windows
const createWindow = () => {
	const win = new BrowserWindow(
		{
			width: 1200,
			height: 980,
			backgroundColor: '#EFEFEF'
		}
	);

	win.loadFile('index.html');
}

app.whenReady().then(
	() => {
		createWindow();

		app.on('activate', () => {
			if (BrowserWindow.getAllWindows().length === 0) {
				createWindow();
			}
		}
	);
})