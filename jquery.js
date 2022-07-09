$(document).ready(function(){
    const valid =  $("#inputSlNo4");
    const inputSelect = $("#inputSelect");
    const inputPrice=$("#inputPrice");
    const inputQty =$("#inputQty");
    let inputTotal = $("#inputTotal");
    const Display = $("#Display");
    $("#resetBtn").click(function()
    {
        Display.hide();
    });
    
    Display.hide();
   $("#addBtn").click(function(){

     
      if(valid.val() == ""){
        alert("Please enter serial number.");
        focus(function(){valid});
        return false;
        }
       
    if(inputSelect.val() ==""){
        alert("Please select any product");
        focus(function(){inputSelect});
        return false;
    }
    if(inputPrice.val()==""){
        alert("Please enter price.");
        focus(function(){inputPrice});
        return false;
        }
    if(inputQty.val()==""){
        alert("Please enter Quentity.");
        focus(function(){inputQty});
        return false;
     }
     Display.show();
   
     
     $("#tbody").append(`<tr>
                           <td>${valid.val()}</td>
                           <td>${inputSelect.val()}</td>
                           <td>${inputPrice.val()}</td>
                           <td>${inputQty.val()}</td>
                           <td class="sam">${inputTotal.val()}</td>
                        <tr>`)
   total_price();
 
 })

 function total_price(){
    var sum = 0;
    $(".sam").each(function(){
        sum+=parseFloat($(this).text());
    })
    $("#tprice").text(sum);
 }
 

     
     $("#inputSlNo4").keypress(function(event){
       const ac = event.keyCode;
       if(!((ac >= 48) && (ac<= 57))){
        focus(function(){valid});
        return false;
       }
     })
     $("#inputPrice").keypress(function(event){
        const ac = event.keyCode;
        if(!((ac >= 48) && (ac<= 57) || (ac == 46))){
         focus(function(){inputPrice});
         return false;
        }
      })

      $("#inputQty").keypress(function(event){
        const ac = event.keyCode;
        if(!((ac >= 48) && (ac<= 57))){
         focus(function(){inputQty});
         return false;
        }
      })
      $("#inputQty").keyup(function(event){
        const x = inputPrice.val();
        const y = inputQty.val();
        console.log(x);
        console.log(y);
        inputTotal.val( parseFloat(x) * parseFloat(y));
      })
      
     

  });

 