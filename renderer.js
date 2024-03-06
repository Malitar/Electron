// You can't access node.js API with the renderer process, but render has controll over the DOM

const information = document.getElementById('info');
let pingpong = document.getElementById('ping');

const func = async () => {

	const response = await window.versions.ping();
	pingpong.innerText = response;
	console.log(response); // console does not work here
}
if(information != null || information != undefined) {
	information.innerText = information.innerText + `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
}

func()


