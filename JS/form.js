class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("CarRaces Pro");
        title.position(150,10);
        var input = createInput("Enter your name here");
        input.position(130,160);
        var button = createButton("Play");
        button.position(250,160);
        var greeting = createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hi, "+ name);
            greeting.position(130,160)
        })

    }
}