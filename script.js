
document.getElementById("btnShow").onclick = function(){
    let sentence = document.getElementById("sentence").value;
    let times = parseInt(document.getElementById("times").value);
    let resultsDiv = document.getElementById("results");

    let ol = document.createElement("ol");

    for (let i = 0; i < times; i++){

        let li = document.createElement("li");
        li.textContent = sentence;
        ol.appendChild(li);
       
    }

    resultsDiv.appendChild(ol);

}
