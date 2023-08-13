//your JS code here. If required.
document.getElementById('enterbtn').addEventListener('click', ()=>{
	let h1 = document.creatElement('h1');
	h1.innerText = "Entered Metaverse"
	document.getelementById("head").append(h1);
	document.getElementById("status").innerText = "";
	
})