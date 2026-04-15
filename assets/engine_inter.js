//in the cache JSON.stringify()
class soilder{
  constructor(health,power){
    let health=health;
    let power=power;
    
  }
  function doDamage(damage){
    this.health-=damage;
  }
  function attack(player){
    if(this.health>0){
      return player.damaged(power)
    } else{
      return player
    }
  }
  function throwMyName(id){
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
  function damaged(damage){
    this.health-=damage;
    if(this.health<0){
      document.getElementById('').innerText=`you have died!`;//the main text area
      this.stats[6]="";//the time machine room
      this.stats[0]=100;
      return 0;
    }
  }
  function goto(world,instruction){
    this.stats=world.search(this,instruction);
  }
  function burn(){
    if(this.stats[3]){
      this.stats[5].push(this.stats[6]);
    };
    return 0;
  }
}
class world{//world has the ability to edit the output and is like GM
  constructor(json_parse){
    let time_attributes=[];//the attributes for the timeline
    let enemies=[];//enemy list
    let univer=json_parse;
  }
  function search(player,instruction){
    this.univer.//#####WIP
  }
}
