let inputField = document.querySelector('#myInput')
let btn = document.querySelector(".addBtn")
let list = document.querySelector(".myList")

btn.addEventListener("click", ()=>{
  let inputValue = inputField.value
  let newTask = document.createElement("li")
  newTask.innerHTML = inputValue

  let deleteBtn = document.createElement("button")
  deleteBtn.innerText = "Delete"
  deleteBtn.classList.add("deleteBtn")

  deleteBtn.addEventListener("click", () => {
    newTask.remove()
  })

  newTask.appendChild(deleteBtn)


  list.appendChild(newTask)
  inputField.value = ""
})
