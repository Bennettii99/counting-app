// // //document.getElementById("count").innerText = 5;



//function increment() { alert("clicked")}

let Countem = document.getElementById("count");
let savethis = document.getElementById("savein");
let count1 = 0;



function increment(){ 

count1 = count1 + 100;

Countem.innerText = count1;

}

function decrement(){ 

    count1 = count1 - 100;
    
    Countem.innerText = count1;

    
    }

    function save(){ 

        let countstr = count1 + ",";
        
        savethis.innerText += countstr ;
    
        
        }


        function reset() {

            let zeroout = 0 + ",";
           
            savethis.innerText += zeroout

            Countem.innerText = 0;

        }