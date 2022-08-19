var list = document.getElementById("list");

function additems() {
    var items = document.getElementById("items");

    if (items.value) {
        var li = document.createElement("li")
        var litext = document.createTextNode(items.value)
        li.appendChild(litext);


        var delbtn = document.createElement("button")
        var deltext = document.createTextNode("delete")
        delbtn.appendChild(deltext)
        delbtn.setAttribute("class","btn")
        delbtn.setAttribute("onclick", "deleteitems(this)")
        li.appendChild(delbtn)


        var editbtn = document.createElement("button")
        var edittext = document.createTextNode("Edit")
        editbtn.appendChild(edittext)
        editbtn.setAttribute("class","btn")
        editbtn.setAttribute("onclick", "edititems(this)")
        li.appendChild(editbtn)

        document.getElementById("list").appendChild(li)
        items.value = ""


    }
    else{
        alert("Enter same value")
    }
}
function deleteall() {
    document.getElementById("list").innerHTML = ''
}
function deleteitems(e) {
    e.parentNode.remove();

}
function edititems(e) {
    var newValue = prompt("New Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = newValue;


}