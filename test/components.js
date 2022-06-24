

describe("interaction with the webside", function(){ 

     it("enter url in a browser", function(){
        browser.url('/');
        browser.pause(5000);

        const calText = $('//div[.="Calculator"]');   //find calculator
        console.log(calText.getText());
   
        
        const todoText = $('//h3[.="Todo"]');
        console.log(todoText.getText());
        
   
        
        const counterText = $('//div[.="Counter"]');
        console.log(counterText.getText);

      })
             
     
     });
