var dataset;

fetch('https://api.exchangeratesapi.io/latest')
.then(response => response.json())
.then(data => {

    dataset = data;

    //console.log(data.rates)

    var eurval = document.getElementById('eurval').value;


    if(eurval.length >= 1){

        
        };
        
        convert();
    }
);

function convert(){
   
    var eurval = document.getElementById('eurval').value;

    const objectArray = Object.entries(dataset.rates);

    var afi = [];

    if(eurval.length > 0 && typeof(eurval) != 'number'){
        console.log('introduce a num');

        document.querySelector('.nummm').innerHTML = "introduce a number !"
    }

    if(eurval > 0 && eurval.length > 0){
    document.querySelector('.nummm').innerHTML = ""

    for(var i = 0 ; i <= objectArray.length-1;i++){
        var x = objectArray[i][0];
        var y = objectArray[i][1]*eurval;

        var fi = (`${x} = ${y}`)

        afi.push(fi);


    }
    var ar = Array.from(afi);

    document.querySelector('.all').innerHTML = '';

    for(var j= 0 ; j <= ar.length - 1;j++){
        document.querySelector('.all').innerHTML += `<li><h1>${ar[j]}</h1><br></li>`

    }

    afi = []

    }

}

function myFunction(){
    search = document.getElementById('search');
    filter = search.value.toUpperCase();
    ul = document.querySelector('.all');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        h1 = li[i].getElementsByTagName("h1")[0];
        txtValue = h1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
    }
}