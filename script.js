//your code here
var task=document.getElementById("name");
var addBtn=document.getElementById("btn");
var addToList=document.getElementById("list");

addBtn.addEventListener("click",()=>{
	var taskValue=task.value.trim();
	if(taskValue!=""){
		const todoItem=document.createElement("li");
		todoItem.innerText=taskValue;
		list.appendChild(todoItem);
		task.value='';
		
	}
})


