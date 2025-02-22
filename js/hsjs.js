function hashw(input , hash2 ="myhash2"){
    if (!input || input.length === 0) {
        alert("Enter The Password")
        return null;
    }

    const hash2inp = input + hash2;
    let hash = 0;

    for (let i = 0; i < hash2inp.length; i++) {
        const char = hash2inp.charCodeAt(i); 
        hash = (hash << 5) - hash + char; 
        hash |= 0; 
    }

    hash = Math.abs(hash).toString(16).padStart(8, '0');
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
