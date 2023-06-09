
const items = [];
function add(){
    
    let iteminput = document.querySelector(".js-iteminput");
    let itemdate = document.querySelector(".js-itemdate");
    items.push({name:iteminput.value, date:itemdate.value});
    display();
   
}
function display(){
    let listofitems = document.querySelector(".js-listitems");
    let temp ='';
    for(let i =0;i<items.length;i++){
        temp += `<p>${items[i].name}</p>
                 <p>${items[i].date}</p>
                 <button class ='cssdelete' onclick='items.splice(${i},1); display();'}>DELETE</button>`;
    }
    listofitems.innerHTML = temp;

}