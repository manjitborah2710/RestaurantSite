var nameHolder=document.getElementById("name-holder");
console.log(nameHolder.id+"");
var profiles=document.getElementsByClassName("profile-img");
var name="";
for(var i=0;i<profiles.length;i++){
    console.log(profiles[i].className)
    profiles[i].onmouseover=displayName;
    profiles[i].onmouseout=removeName;
}
function displayName(e){
    nameHolder.innerHTML=e.target.name+"<br>"+"_________";
}
function removeName(e){
    nameHolder.innerHTML="";
}