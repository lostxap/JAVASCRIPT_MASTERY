function submit(){

    let dif = 0;

    function element(inpt){
        this.inpt = inpt;
        this.link = link;
        
    
        return `<a href='${link}' target="_blank"><div class="grid"><h1 class="item ${dif}">${inpt}</h1><h2>X</h2></div></a>`;

    }


    var inpt = document.getElementById("myText").value;

    var link = document.getElementById("myLink").value;


    if(inpt.length > 0){

         document.querySelector('.all').innerHTML += element(inpt);

    }

    var closebtns = document.getElementsByTagName("h2");

    var cross = document.getElementsByTagName("h1");

    for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
            this.parentElement.style.display = 'none';
      });
       
    }

    for (i = 0; i < cross.length; i++) {
      
      cross[i].addEventListener("click", function() {
        
        if (this.parentElement.style.color == 'black'){
            this.parentElement.style.color = 'white'
            this.parentElement.style.backgroundColor= 'black';
        }else{
            this.parentElement.style.color = 'black'
            this.parentElement.style.backgroundColor= 'royalblue';
        };


  });
    }

}
