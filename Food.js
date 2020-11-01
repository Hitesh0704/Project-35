class Food{
    constructor(){
    this.foodstock=0;
    this.lastFed;
    this.image=loadImage("images/Milk.png");
    }
    updateFoodStock(food){
        this.foodstock = food;
    }
    deductFood(){
        if(this.foodstock>0){
            this.foodstock--;
        }
    }
    getFoodStock(){
        return this.foodstock;
    }
    getfedtime(time){
        this.lastfed=time;
    }
    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
        if(this.foodstock!==0){
            for(var i=0; i<this.foodstock; i++){
            if(i%10===0)
                x = 20;
                y=30;
                 x=x+50;
                 y = y + 10;
            image(this.image,x,y,50,50);
           
           
         } 
        }
    }
}