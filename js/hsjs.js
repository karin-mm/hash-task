function hashw(input){
    let hash = 0;
    if (input.length === 0 ) {
        alert("Enter The Password")
        return hash;
    }

    for (let i = 0; i < input.length; i++) {
        const char = input.charCodeAt(i); 
        hash = (hash << 5) - hash + char; 
        hash |= 0; 
    }

    return hash;

}

function hashing(){

    const inp = document.getElementsByClassName("inp")[0].value;
    const hash = hashw(inp);
    document.getElementById("output").innerHTML=hash;

}

function reset(){

    document.getElementsByClassName("inp")[0].value = "";
    document.getElementById("output").value = "";

}

function show(){
    const s = document.getElementsByClassName("inp")[0];
    if (s.type === "password") {
        s.type = "text";
    }else{
        s.type = "password"
    }
}
