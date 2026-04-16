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
function buttonify(name,buttonoutput){
    return `<button class="action_button" onclick="theplayer.goto(${name})">${name}</button>`
}
class soilder{
  constructor(health,power){
    let health=health;
    let power=power;
    
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
  constructor(){
    let stats=[100,100,100,false,[],[],[],""];//health, power, magic, use magic, claim list, inventory, burn list, location
  }
  damaged(damage){
    this.health-=damage;
    if(this.health<0){
      document.getElementById('dynamictext').innerText="you have died!";//the main text area
      this.stats[6]="";//the time machine room
      this.stats[0]=100;
      return 0;
    }
    return 0;
  }
  goto(world,instruction){
    this.stats=world.search(this,instruction);
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
  }
  search(player,instruction){
    this.possible_rooms=this.univer[player[6]][attributify(time_attribute)];
    if(instruction in ["north","south","east","west"]){
      return player[6]=possible_rooms[instruction];
    }
    if(instruction =="look"){
      for(let look of possible_rooms["look"]){
        if(look==="burnt" && player.stats[6] in player.stats[5]){
          document.getElementById('dynamictext').innerText+=this.possible_rooms
        }
      }
    }
  }
  readToMe(){
   document.getElementById('dynamictext').innerText+=this.possible_rooms.description;//enter main areas id here

  }
}
