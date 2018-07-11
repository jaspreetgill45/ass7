let names =[];

var thieve1 = {name:"Protagonist",codename:"Joker" ,persona:"Arsene,Satanael" ,arcana: null ,image: "https://vignette.wikia.nocookie.net/megamitensei/images/6/63/Persona_5_Hero.png/revision/latest?cb=20160505182242" };
var thieve2 = {name:"Ryuji Sakamoto",codename:"Phantom Thief " ,persona:"Captain Kidd" ,arcana:"the Chariot", image: "https://vignette.wikia.nocookie.net/megamitensei/images/b/bc/Ryuji_Sakamoto.png/revision/latest?cb=20160505182138" };
var thieve3 = {name:"Morgana",codename:"Mona" ,persona:"Zorro" ,arcana: "Magician" ,image: "https://vignette.wikia.nocookie.net/megamitensei/images/6/68/P5_Morgana_character_artwork.png/revision/latest?cb=20160505181742" };
var thieve4 = {name:"Ann Takamaki",codename:"Panther" ,persona:"Carmen" ,arcana: "lovers" ,image: "https://vignette.wikia.nocookie.net/megamitensei/images/b/be/An_takamaki.png/revision/latest?cb=20170426203909" };
var thieve5 = {name:"Yusuke Kitagawa",codename:"Fox" ,persona:"Goemon" ,arcana: "Emperor" ,image: "https://vignette.wikia.nocookie.net/megamitensei/images/5/5c/Yusuke-Kitagawa.png/revision/latest?cb=20160505181913"};





function display_img(sel_id) {
    name = document.getElementById(sel_id).innerHTML;
    if(thieve1.name == name){
        document.getElementById("picture").innerHTML = '<img src='+thieve1.image+'>'; 
    }
    else if(thieve2.name == name){
        document.getElementById("picture").innerHTML = '<img src='+thieve2.image+'>'; 
    }
    else if(thieve3.name == name){
        document.getElementById("picture").innerHTML = '<img src='+thieve3.image+'>'; 
    }
    else if(thieve4.name == name){
        document.getElementById("picture").innerHTML = '<img src='+thieve4.image+'>'; 
    }
    else if(thieve5.name == name){
        document.getElementById("picture").innerHTML = '<img src='+thieve5.image+'>'; 
    }

}

function  displayProfile(sel_id){
    name = document.getElementById(sel_id).innerHTML;
    if(thieve1.name == name){
        document.getElementById("name").innerHTML ="Name: "+thieve1.name;
        document.getElementById("codename").innerHTML ="Codename: "+thieve1.codename;
        document.getElementById("persona").innerHTML ="Persona: "+thieve1.persona;
        document.getElementById("arcana").innerHTML ="Arcana: "+thieve1.arcana;
    }
    else if(thieve2.name == name){
        document.getElementById("name").innerHTML ="Name: "+thieve2.name;
        document.getElementById("codename").innerHTML ="Codename: "+thieve2.codename;
        document.getElementById("persona").innerHTML ="Persona: "+thieve2.persona;
        document.getElementById("arcana").innerHTML ="Arcana: "+thieve2.arcana;
    }
    else if(thieve3.name == name){
        document.getElementById("name").innerHTML ="Name: "+thieve3.name;
        document.getElementById("codename").innerHTML ="Codename: "+thieve3.codename;
        document.getElementById("persona").innerHTML ="Persona: "+thieve3.persona;
        document.getElementById("arcana").innerHTML ="Arcana: "+thieve3.arcana;
    }
    else if(thieve4.name == name){
        document.getElementById("name").innerHTML ="Name: "+thieve4.name;
        document.getElementById("codename").innerHTML ="Codename: "+thieve4.codename;
        document.getElementById("persona").innerHTML ="Persona: "+thieve4.persona;
        document.getElementById("arcana").innerHTML ="Arcana: "+thieve4.arcana;
    }
    else if(thieve5.name == name){
        document.getElementById("name").innerHTML ="Name: "+thieve5.name;
        document.getElementById("codename").innerHTML ="Codename: "+thieve5.codename;
        document.getElementById("persona").innerHTML ="Persona: "+thieve5.persona;
        document.getElementById("arcana").innerHTML ="Arcana: "+thieve5.arcana;
    }
}

function remove(sel_id){
    name = document.getElementById(sel_id).innerHTML;
    index = names.indexOf(name);
    names.splice(index, 1);
    document.getElementById("castle_team0").innerHTML =names[0];
    document.getElementById("castle_team1").innerHTML =names[1]; 
    document.getElementById("castle_team2").innerHTML =names[2];     
}


function displayCastle(sel_id){
        if(names.length<3)
        document.getElementById(sel_id).style.backgroundColor = "grey";
        names.push(document.getElementById(sel_id).innerHTML);
            if(names.length>3){
                alert("castle team cannot have  more than three");
            }
            else
            {
                    document.getElementById("castle_team0").innerHTML =names[0];
                    document.getElementById("castle_team1").innerHTML =names[1]; 
                    document.getElementById("castle_team2").innerHTML =names[2];              
            }
            if((names[0] == names[1]) || (name[0] == names[2])){
                alert("choose diff players");
            }
            else if((names[1] == names[0]) || (name[1] == names[2])){
                alert("choose diff players");
            }
            else if((names[2] == names[0]) || (name[2] == names[1])){
                alert("choose diff players");
            }

}



window.onload = function(){
function team_list(){
    let list=[];
    list.push(thieve1.name);
    list.push(thieve2.name);
    list.push(thieve3.name);
    list.push(thieve4.name);
    list.push(thieve5.name);
        document.getElementById('team_list1').innerHTML =list[0];
        document.getElementById('team_list2').innerHTML =list[1];
        document.getElementById('team_list3').innerHTML =list[2];
        document.getElementById('team_list4').innerHTML =list[3];
        document.getElementById('team_list5').innerHTML =list[4];
        
    }
    team_list();
}
