const b1=document.querySelector("#b1");
const b2=document.querySelector("#b2");
const b3=document.querySelector("#b3");
const b4=document.querySelector("#b4");
const display=document.querySelector(".display");


let suma=0;
const tab=[1,2,3,4,5,6];
b1.addEventListener("click",function(e){
    e.preventDefault()
    console.log("b1")
    tab.forEach((element, index) => {
        console.log(`${index} : ${element}`);
        display.innerHTML+= `<p> ${index} : ${element}</p>`;
    });
        
    })

    b2.addEventListener("click",function(e){
        e.preventDefault()
        console.log("b2");
         tab2= tab.map((element,index)=> {
            console.log(`${index} : ${element *2}`);
            display.innerHTML+= `<p> ${index} : ${element *2}</p>`;
        });
            
        })
        b3.addEventListener("click",function(e){
            e.preventDefault()
            console.log("b3");
             tab3= tab.filter((element,index)=> {
              if(element%2 ==0)
              {
                display.innerHTML+= `<p> ${index} : ${element *2}</p>`;
              }
            });
    
                
            })

            b4.addEventListener("click",function(e){
                e.preventDefault()
                console.log("b4");
                 tab4= tab.reduce((element)=> {
                 
                  suma=suma+Number(element);
                });
                    display.innerHTML+= `<p> Suma: ${suma}</p>`;
                  
             
        
                    
                })
    

