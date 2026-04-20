//in the cache JSON.stringify()
function attributify(attributes){//converts attributes in a string
  if("dino" in attributes && "goodwitch" in attributes){
    return "all"
  }
  else if(attributes===["dino"]){
    return "dino"
  }
  else if(attributes===[]){
    return "none"
  } 
}
const alertwithbutton={buttonused:false, command:""};
function buttonify(name,buttonoutput){
    return `<button class="action_button" onclick="letsdo(${name})">${name}</button>`
}
function letsdo(command){
  alertwithbutton.buttonused=true;
  alertwithbutton.command=command;
}
function changetolist(varoriginal){
  return {"burnt":5}[varoriginal]
}
class soilder{
  constructor(thealth,tower){
    let health=thealth;
    let power=tpower;
    
  }
  doDamage(damage){
    this.health-=damage;
  }
  attack(player){
    if(this.health>0){
      return player.damaged(power)
    } else{
      return player
    }
  }
  throwMyName(id){
    if(this.health>0){
      return `soilder ${id} has ${this.health}`
    } else{
      return `soilder ${id} is dead`
    }
  }
}
class player{//this stores the health information and inventory
  constructor(document){
    let stats=[100,100,100,false,[],[],[],""];//health, power, magic, use magic, claim list, inventory, burn list, location
    //let document=document;
  }
  damaged(damage){
    this.health-=damage;
    if(this.health<0){
      this.document.getElementById('dynamictext').innerText="you have died!";//the main text area
      this.stats[6]="";//the time machine room
      this.stats[0]=100;
      return 0;
    }
    return 0;
  }
  goto(world,instruction){
    this.stats=world.search(this,instruction);
    return world;
  }
  burn(){
    if(this.stats[3]){
      this.stats[5].push(this.stats[6]);
    };
    return 0;
  }
  
};
class world{//world has the ability to edit the output and is like GM
  constructor(json_parse){
    let time_attributes=[];//the attributes for the timeline
    let enemies=[];//enemy list
    let univer=json_parse;
    let possible_rooms;
    //let document;
  }
  search(player,strinstruction){
    let instruction=split(strinstruction);
    this.possible_rooms=this.univer[player[6]].dependencies[attributify(time_attributes)];
    if(instruction in ["north","south","east","west"]){
      return player[6]=possible_rooms[instruction];
    }
    if(instruction =="look"){
      for(let look of possible_rooms["look"]){
        if(look==="burnt" && player.stats[6] in player.stats[5]){
          document.getElementById('dynamictext').innerText+=this.possible_rooms["burnt"]["true"];
        }
        else if(look==="burnt" && !(player.stats[6] in player.stats[5])){
          document.getElementById('dynamictext').innerText+=this.possible_rooms["burnt"]["false"];
        }
      }
      for(let showvar of goto){
        document.getElementById('dynamictext').innerText+=showvar;
      }
      for(let showvar of gotow){
        if(get_here[1][1] in player.stats[changetolist(get_here[1])]){
            document.getElementById('dynamictext').innerText+=showvar;
         }
     }
    }
    if("goto" in instruction){
      let get_item=instruction[1];
      for(let get_here of possible_rooms.goto){
        if(get_here===get_item){
          if("claim" in get_here){
            player[4].push(get_here);
            player[3].push(get_here);
            break;
          }
          else{
            player[6]=get_here[0];//changes location
          }
        }
      }
      for(let get_here of possible_rooms.gotow){
        if(get_here===get_item){
          if(get_here[1][1] in player.stats[changetolist(get_here[1])]){
            if("claim" in get_here){
              player[4].push(get_here);
              player[3].push(get_here);
              break;
            } else{
              player[6]=get_here[0];
            }
          }
        }
      }
      for(let get_here of possible_rooms.gotow){
        if(get_here===get_item){
          if("command" in get_here){
              this.enemies.push(enemify(get_item.command));
            
            }
          }
        }
      }
    }
  return player.stats;
  }
  readToMe(){
   document.getElementById('dynamictext').innerText+=this.possible_rooms.description;//enter main areas id here

  }
  
}
function maingame(document){
  alert("loaded");
  let gamemaker=world(JSON.parse(fetch("./game/main.json")));
  let you=player();
  let command="";
  let docont=true;
  const wait1sec = (s) => Promise(resolve=>setTimeout(resolve,s*1000);
  while(true){
    while(docont){
      docont=!(alertwithbuttons.buttonused);
      await wait1sec(1);  
    }
    alertwithbuttons.buttonused=false;
    docont=true;
    gamemaker=you.goto(gamemaker,alertwithbuttons.command);
    //crude
  }
}
class iframeButton{}//a button that loads a popup to a diffirent html page 
class simpleButton{}// a button that bdisplays simple varibles
class person{}//the persons health, inventory
class interactiveNPC{}//a child of person,m when interacted with, it can give inventory based of conditions and can take from the player too
maingame(document);
