let addbtn = document.querySelector(".addbtn");
let modalcont = document.querySelector(".modal-cont");
let textarea = document.querySelector(".textarea-cont");
let maincont = document.querySelector(".main-cont");
let allprioritycolor = document.querySelectorAll(".colored");
let isModal = true;
let taskColor = 'red';
var uid = new ShortUniqueId()

addbtn.addEventListener('click',function(){
    console.log("btn clicked");
    if(isModal){
        modalcont.style.display = "flex";
    }
    else{
        modalcont.style.display = "none";
    }
    isModal = !isModal;
});

textarea.addEventListener('keydown', function(e){
    // console.log(e);
    let key = e.key;
    if(key === "Enter"){
        // console.log("generate ticket");
        if(textarea.value === ""){
           textarea.value ="";
            alert("Please");
            return;
        }
        generateTicket(textarea.value);
        textarea.value = "";
        modalcont.style.display = "none";
        isModal = true;
    }
})
function generateTicket(task){
    let ticketcont = document.createElement("div");
    // <div class="ticket-cont">
        // <div class="ticket-color green"></div>
        // <div class="ticket-id">#ionx</div>
        // <div class="ticket-area">Some task</div>
    // </div>
    let id = uid.rnd();
    ticketcont.className = "ticket-cont";
    ticketcont.innerHTML = `<div class="ticket-color ${taskColor}">
    </div><div class="ticket-id">${id}</div>
    <div class="ticket-area">${task}</div>`
    // console.log(ticketcont);
    maincont.appendChild(ticketcont);

}

for(let i = 0; i<allprioritycolor.length;i++){
    allprioritycolor[i].addEventListener("click",function(){
        for(let j = 0; j<allprioritycolor.length;j++){
            allprioritycolor[j].classList.remove("active");
        }
        allprioritycolor[i].classList.add("active");
        taskColor = allprioritycolor[i].classList[1];
    });
}

