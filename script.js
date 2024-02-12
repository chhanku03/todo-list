const searchBar=document.querySelector("#searchBar");
const listContainer=document.querySelector("#list-container");

function addTask(){
      if(searchBar.value==='')
      {
        alert("you must write something");
      }
      else
      {
        let li=document.createElement("li");
        li.innerText=searchBar.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="&#10006;"
        li.appendChild(span);
      }
      searchBar.value="";
      saveData();
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
      saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
    e.target.parentElement.remove();
     saveData();

     }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}
showTask();