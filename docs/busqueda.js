/* const userList = [];

let searchBar = document.getElementById("search-field");
searchBar.addEventListener("keyup", function(event){
    let myText = searchBar.value;
    console.log('My text: '+myText)
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

const obtener =()=>{
    let users = document.getElementById("resultados");
    
    let oneUser = document.getElementsByClassName("grid-user");
    

    for (let i = 0; i < oneUser.length; i++){ 
        userList.push(oneUser[i].innerHTML);
    }

    
}
setTimeout(obtener, 1000) */