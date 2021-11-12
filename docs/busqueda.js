const userList = [];
let users = document.getElementsById("resultados");
let oneUser = document.getElementsByClassName("grid-user");

for (let i = 0; i < oneUser.length; i++){ 
    userList.push(oneUser[i].innerHTML);
}

let searchBar = document.getElementById("search-field");
searchBar.addEventListener("keyup", function(event){
    let myText = searchBar.value;
    let size = 0
    for (let i = 0; i < resultados.length; i++){ 
        if(userList[i].indexOf(myText) < 0){
            users[i].style.display = "none";
        }
        else{
            users[i].style.display = "block";
            size ++;
        }
    }
    document.getElementById("total").innerHTML = `<i class="fas fa-search"></i> Total: ${size}`
});