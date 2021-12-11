function clearContents(element) {
	element.value = '';
}
  
function raiseHand(idX){
  var jobValue = document.getElementById('msgTxt').value
	var jsonPost=(JSON.stringify({text:jobValue,button:idX}))
	sendJSON(jobValue,idX);
}
  
function sendJSON(msgTxt,btnID){
switch(btnID){
  case "koyySig":
    document.getElementById("koyySig").style.boxShadow="0px 0px 15px 3px rgba(255,255,255,0.9);"
  break;
  case "kfgoSig":
  break;
  case "kvoxSig":
  break;
}

console.log(msgTxt,btnID);
fetch('/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
    body: JSON.stringify({
      read:1,button:btnID
    }),
  })
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.log(error);
});
}
function makeChange2(inp) {
  var buttonElement;
  var nodes = document.getElementById('sigBox').childNodes;
  
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].id != inp) { 
      buttonElement = nodes[i].firstElementChild;
      if (buttonElement) {   
        buttonElement.classList.remove("btn-enable");
        buttonElement.classList.add("btn-disable");
      }
    }
  }
  $("button[id=" + inp + "]").toggleClass("btn-enable");
}

function makeChange(inp){
  //enable button
    $("button[id="+inp+"]").addClass("btn-enable");
    $("button[id="+inp+"]").removeClass("btn-disable");
    $("button[id="+inp+"]").prop('disabled',false);
  //disable button
    $("button[id!="+inp+"]").removeClass("btn-enable");
    $("button[id!="+inp+"]").addClass("btn-disable");
    $("button[id!="+inp+"]").prop('disabled',true);
  //ignore chat button
    $("button[id=chatEnter]").removeClass("btn-disable");
}

function enterChat(inp){
  console.log({"station":stationCall.value,"userName":fname.value,"msg":msg.value});
  var textcontrol = document.getElementById("msg");
            textcontrol.value = "";
}
  