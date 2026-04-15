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
class player{
  constructor(){
    let health=100;
    let power=100;
    let magic=100;
    let magic_use=false;
    let location="";//input the room location
    let inventory=[];
    let world_attributes=[];
    let self_actions=[];
    let claim=[];
  }
  function damaged(damage){
    this.health-=damage;
    if(this.health<0){
      document.getElementById('').innerText=`you have died!`;//the main text area
      location="";//the time machine room
      return 0;
    }
  }
  
  }
}
