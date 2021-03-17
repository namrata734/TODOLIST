
var close = document.getElementsByClassName("close");

var ulist = document.querySelector('ul');
ulist.addEventListener('click' , function(event){

});

function createNewElement(){
    var li = document.createElement("li");
    var input = document.getElementById("input").value;
    var text = document.createTextNode(input);
    li.appendChild(text);
    if(input===''){
        alert("This cannot be empty");
    }else{
        document.getElementById("the-ul").appendChild(li);
    }
    document.getElementById("input").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            var parent = this.parentElement;
            parent.style.display = "none";
        }
    }
}