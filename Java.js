function fun(){
    let newElement=document.createElement("table");
    newElement.setAttribute("border","1");
    let row=document.getElementsByTagName("input")[0].value;
    let column=document.getElementsByTagName("input")[1].value;

    for(let i=0;i<row;i++){
        let tr=document.createElement("tr");
    for(let j=0;j<column;j++){
        let td=document.createElement("td");
        tr.appendChild(td);
        td.innerText="Laddu";
    }
    newElement.appendChild(tr);
    }
    newElement.style="border:1px solid blackllo";
    document.body.appendChild(newElement);
}