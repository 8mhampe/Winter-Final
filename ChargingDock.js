
function ChargingDock(){

    this.ports = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
    this.leds=["red","red","red","red","red","red","red","red"];

    this.plug = function(dvc){
        for(let r=0; r<= this.leds.length; r++){
          if(this.leds[r] == "red"){
            this.ports[r] = dvc;
            if(this.juice<0.99){ //ask if it needs to be this.juice.dvc or not
              this.leds[r] = "yellow"
            }
            else{
              this.leds[r] = "green"
            }
          }
        }
    };

    this.unplug = function(dvcIdx){
      if(this.leds[dvcIdx] == !"red"){
        let temp = this.ports[dvcIdx];
        this.ports[dvcIdx] = undefined;
        this.leds[dvcIdx] = "red";
      }
    };

    this.chargeAll = function(min){

    };


}


function main(){

}

main();
