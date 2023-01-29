const getId = (value)=> document.getElementById(value)
const getClass = (value)=> document.querySelector(value)

const editBtn = getClass(".btnEdit")
const styleBtn = getClass(".btnStyle")
const textAreaBlock = getClass('.textAreaBlock')
const formBlock = getClass('.formBlock')
const textArea = getClass('.textAreaOne')
const previewContainer = getId('previewContainer')
const addBtn = getClass('.btnAdd')
const saveBtn = getClass('.btnSave')
const fontSizeForm = document.querySelector('.btnRadio')
const selectedFontFamily = document.querySelector('.fontsFamily')
const btnTextColor = getClass('.btnTextColor')
const btnBackColor = getClass('.btnBackColor')
const blockColor = getId('colors')
const blockBackColor = getId('backColors')
const btnAdd = getClass('.btnAdd')
const content = getClass('.content')
const addContent = getClass('.addContent')
const tableInputs = getClass('.tableInputs')
const listInputs = getClass('.listInputs')

const createList =()=>{
    const countLi = getId('countLi').value
    const typeMarks = getId('typeMarks').value
    const colum = document.createElement('ul')
    colum.style.listStyleType = `${typeMarks}`
    for(i=0; i<countLi; i++){
        const li = document.createElement('li')
        li.innerText =`item ${i+1}`

        colum.appendChild(li)
    }
    textArea.value += colum.outerHTML

    content.style.display = "block";
    addContent.style.display = "none"
}


const createTable = ()=>{
    const trInput = getId('trInput')
    const tdInput = getId('tdInput')
    const widthTdInput = getId('widthTdInput')
    const heightTdInput = getId('heightTdInput')
    const widthBorder = getId('widthBorder')
    const typeOfBorder = getId('typeOfBorder')
    const colorOfBorder = getId('colorOfBorder')

    const rowsCount = trInput.value
    const tdCount = tdInput.value
    const userTable = document.createElement('table');

    for(let i =0; i<rowsCount; i++){
        const tr = document.createElement('tr')
        for(let i =0; i<tdCount; i++){
            const td = document.createElement('td');
            td.style.width =`${widthTdInput.value}px`
            td.style.height =`${heightTdInput.value}px`
            td.style.border =`${widthBorder.value}px ${typeOfBorder.value} ${colorOfBorder.value}`
            td.innerText = 'TD';
            tr.appendChild(td)
        }
        userTable.appendChild(tr);
    }
    textArea.value += userTable.outerHTML
    content.style.display = "block";
    addContent.style.display = "none"
}

function openTable(){
    tableInputs.style.display = "flex"
    listInputs.style.display = "none"
}
function openList(){
    tableInputs.style.display = "none"
    listInputs.style.display = "block"
}
btnAdd.onclick = function(){
    content.style.display = "none";
    addContent.style.display = "flex"
}
function cursiveChange(checkbox) {
    if(checkbox.checked == true){
        previewContainer.style.fontStyle = "oblique";
    }else{
        previewContainer.style.fontStyle = "normal";
   }
}
function boldChange(checkbox) {
    if(checkbox.checked == true){
        previewContainer.style.fontWeight= "bold";
    }else{
        previewContainer.style.fontWeight = "normal";
   }
}

btnTextColor.onclick = function(){
    blockColor.style.display = "flex"
    blockBackColor.style.display = "none"
}
btnBackColor.onclick = function(){
    blockBackColor.style.display = "flex"
    blockColor.style.display = "none"
}
document.querySelectorAll('.blockItm').forEach((element)=>{
    element.addEventListener('click', () => {
        const backgroundColor = getComputedStyle(element).backgroundColor
        previewContainer.style.color = backgroundColor
    })
})
document.querySelectorAll('.blockItmTwo').forEach((element)=>{
    element.addEventListener('click', () => {
        const backgroundColor = getComputedStyle(element).backgroundColor
        previewContainer.style.backgroundColor = backgroundColor
    })
})
saveBtn.onclick = function(){
    previewContainer.innerHTML = textArea.value
    textAreaBlock.style.display = "none"
}

editBtn.onclick = function(){
    textAreaBlock.style.display = "block"
    formBlock.style.display="none"
    textArea.value = previewContainer.innerHTML
}
styleBtn.onclick = function(){
    textAreaBlock.style.display = "none"
    formBlock.style.display="flex"
}
for(let i = 0; i<fontSizeForm.elements.length; i++){
    fontSizeForm.elements[i].onclick = function(){
        previewContainer.style.fontSize = this.value
    }
}
selectedFontFamily.onchange = function(){
    previewContainer.style.fontFamily = this.value
}



