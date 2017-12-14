const Device = require("./Device.js");

function ChargingDock(){

    this.ports = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
    this.leds=["red","red","red","red","red","red","red","red"];

    this.plug = function(dvc){
        for(let r=0; r<8; r++){
          if(this.leds[r] == "red"){
            this.ports[r] = dvc;
            if(this.ports[r].juice<0.99){ 
              this.leds[r] = "yellow"
            }
            else{
              this.leds[r] = "green"
            }
          }
        }
    };

    this.unplug = function(dvcIdx){
      if(!(this.leds[dvcIdx] == "red")){
        let temp = this.ports[dvcIdx];
        this.ports[dvcIdx] = undefined;
        this.leds[dvcIdx] = "red";
        return temp;
      }
    };

    this.chargeAll = function(min){
      for(let c=0; c<8; c++){
        if(!(this.leds[c] == "red")){
          this.ports[c].charge(min);
        }
        if(this.ports[c].juice > 0.99){
          this.leds[c] = "green";
        }
      }
    };

}


function main(){
  let cd = new ChargingDock();

    let d1 = new Device("phone",3000,10000);
    let d2 = new Device("laptop",3000,15000);
    let d3 = new Device("laptop",5000,15000);
    let d4 = new Device("tablet",3000,15000);

    d1.use(90);
    d2.use(120);
    d3.use(90);
    d4.use(240);

    cd.plug(d1);
    cd.plug(d2);
    cd.plug(d3);
    cd.plug(d4);

    cd.chargeAll(60);

    cd.unplug(0);
    cd.unplug(1);

}

main();
