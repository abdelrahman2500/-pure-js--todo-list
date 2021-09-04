var txt = document.querySelector("[type='text']")
var addBtn = document.getElementById("add")

var table = document.getElementsByTagName("table")[0]
var para = document.getElementById("para")


addBtn.addEventListener("click", addFun)
var tr, tdNum, tdDon, tdText, tdDelete;
function addFun(){
    if(txt.value.trim() !=""){
        
        tr = document.createElement("tr")
        tdDone = document.createElement("td")
        tdText = document.createElement("td")
        tdDelete = document.createElement("td")

        var checkInput = document.createElement("input")

        var attr = document.createAttribute("type")
        attr.value="checkbox"
        checkInput.setAttributeNode(attr)

        tdDone.appendChild(checkInput)
        tdText.innerHTML= txt.value
        tdDelete.innerHTML = "<img src='d.png' />"

        tr.appendChild(tdDone)
        tr.appendChild(tdText)
        tr.appendChild(tdDelete)

        table.appendChild(tr)
        console.log(checkInput)
        txt.value = ""
        txt.focus()
        bgFun()
        paraFun()
    }
}

table.addEventListener("click", function(e){
    if(e.target.nodeName.toLowerCase() == "img")
    e.target.parentNode.parentNode.remove()
    bgFun()
    paraFun()
})


table.addEventListener("click",function(e){
    if(e.target.type == "checkbox"){
        if(e.target.parentNode.parentNode.children[1].style.textDecoration == "line-through"){
            e.target.parentNode.parentNode.children[1].style.textDecoration = "none"
        } else {
            e.target.parentNode.parentNode.children[1].style.textDecoration = "line-through"
        }
        console.log(e.target.parentNode)
    }

})

function bgFun(){
    for(i=0; i< table.children.length; i++){
        if(i%2 == 0 ){
            table.children[i].style.backgroundColor="lightyellow"
        }else{
            table.children[i].style.backgroundColor="lightgreen"
        }
        // console.log(table.children[i])
    }
}

function paraFun(){
    if((table.children.length == 1)){
        para.style.display = "block"
    } else {
        para.style.display = "none"
    }
}
paraFun()