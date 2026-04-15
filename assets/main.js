//store the classes in the cache 
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
  constructor()
}
