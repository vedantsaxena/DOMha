class Game {
    constructor(){

    }
    getState(){
        var gSref = database.ref("gameState");
        gSref.on("value",function(data){
           gameState = data.val();
        });
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if (gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
    }
}