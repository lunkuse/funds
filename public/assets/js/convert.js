
const select = document.querySelectorAll('select');
const input  = document.querySelectorAll('input');
const API_URL = "http://data.fixer.io/api/latest?access_key=1dbba869d4c39161f8561af12b57c0f7";
let html='';

async function currency(){
    const res = await fetch(API_URL);
    const data= await res.json();
    console.log(data.rates);
    
    const rates =data.rates;
    console.log(rates);

    const arrKeys = Object.keys(data.rates);
    console.log(arrKeys);

    arrKeys.map(item => { 
        
        return html += `<option value = ${item} >  ${item} </option>`;
});
console.log(html);

for(let i=0; i<select.length; i++){
    select[i].innerHTML = html;
}


function convert(i,j){
    input[i].value = input[j].value * rates[select[i].value]/rates[select[j].value];
}





input[0].addEventListener('keyup', ()=>convert(1,0))

input[1].addEventListener('keyup', ()=>convert(0,1))


select[0].addEventListener('change', ()=>convert(1,0))

select[1].addEventListener('change', ()=>convert(0,1))













// input[0].addEventListener('keyup', ()=>{
//     input[1].value = input[0].value * rates[select[1].value]/rates[select[0].value];
// });

// input[1].addEventListener('keyup', ()=>{
//     input[0].value = input[1].value* rates[select[0].value]/rates[select[1].value];
// });


// select[0].addEventListener('change', ()=>{
//     input[1].value = input[0].value * rates[select[1].value]/rates[select[0].value];
// });

// select[1].addEventListener('change', ()=>{
//     input[0].value = input[1].value* rates[select[0].value]/rates[select[1].value];
// });







}

currency();