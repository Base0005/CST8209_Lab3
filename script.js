const game ={
wood : 0,
marshmallow: 1,
fire:  true,
tent: false,
}

let help = ()=>{
    return rules
}
let pitch = ()=>{
    game.tent = true;
    return "The Tent Was Pitched"
}
let search = () =>{
    if(game.fire = false){
        game.wood = game.wood ++;
        return "You Have Found 1 Wood"
    }else{
        return "Don't Forget To Put Out The Fire"
    }
}
let tend = ()=>{
    if(game.fire = false && game.wood > 0){
        game.fire = true
        return "Fire Has Been Lit Up"
    }
    if(fire = true){
        game.fire = false;
    }
}
function roast() {
    if(game.fire = true && game.marshmallow > 0){
        game.marshmallow--;
        return "You Now Have " + game.marshmallow + " Marshmallows Left"
    }
}
let sleep = ()=>{
    if (game.fire === true && game.tent === true){
        game.wood = 0;
        game.marshmallow = 3;
        game.fire =  false;
        return "Have A Good Night!!!"
    }
}



