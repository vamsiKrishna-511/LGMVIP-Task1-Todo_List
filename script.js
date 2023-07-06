var input = document.querySelector(".entered-list");
var addBtn = document.querySelector(".add-list");
var tasks = document.querySelector(".tasks");

//---add btn disabled
input.addEventListener("keyup", () => {
    if(input.value.trim() != 0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
})

//---add new item to list

addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0)
    {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    }
    else{
        alert("Please enter a task");
    }
})

//----delete items from list

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})
tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-circle-check')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        let itemText = e.target.parentElement.parentElement.querySelector('p');
        let newText = prompt('Enter new text:', itemText.textContent);
        if (itemText !== null && newText.trim() !== '') {
            itemText.textContent = newText.trim();
        }
    }
});
document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter')
    {
        if(input.value.trim() != 0)
        {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
            <p>${input.value}</p>
            <div class="item-btn">
                <i class="fa-solid fa-circle-check"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
            `
            tasks.appendChild(newItem);
            input.value = '';
        }
        else{
            alert("Please enter a task");
        }
    }
});