
let contUser1 =0;
let contUser2 = 0;
let cards1 = document.getElementById("user1")
let cards2 = document.getElementById("user2")

let resultado = document.getElementById("resultado")
let ganador = document.getElementById("ganador")


function lanzar() {
    let user1= [];
    let user2= [];
let parUser1=0;
let parUser2= 0; 

    user1.push(Math.floor(Math.random() * (11 - 1)) + 1);
    user1.push(Math.floor(Math.random() * (11 - 1)) + 1);
    cards1.textContent+= (`${user1[0]}---${user1[1]}      \n`);

    if (user1[0]==user1[1]){
        parUser1=user1[0];
    }

    user2.push(Math.floor(Math.random() * (11 - 1)) + 1);
    user2.push(Math.floor(Math.random() * (11 - 1)) + 1);
    cards2.textContent+= (`${user2[0]}---${user2[1]}      \n`);

    if (user2[0]==user2[1]){
        parUser2=user2[0];
    }
    

    if(parUser1!=0){
        if (parUser2!=0) {      
            if (parUser1>parUser2) {
                contUser1++
            }else{
                if(parUser2>parUser1){
                    contUser2++
                }else{
                    if (parUser1== parUser1) {
                        contUser2=contUser2+.5;     
                        contUser1=contUser1+.5;  
                    }               
                }
            }    
                  
        }else{
            contUser1++;
        }
    }else{
        if (parUser2!=0){
            contUser2++;
        }
    }

    if (contUser1>5) {
        ganador.textContent=("El juagdor 1 es el ganador");
    }else{
        if (contacts2<5){
            ganador.textContent=("El juagdor 2 es el ganador");
        }
    }
return resultado.textContent=(`Jugador 1:${contUser1} pts------Jugador 2:${contUser2} pts`)

}

