const getId = (value)=> document.getElementById(value)
const getClass = (value)=> document.querySelector(value)


const content = getClass('.content')

const html = getClass('.html')

const boldFont = getClass('.boldFont')
const italicFont = getClass('.italicFont')
const underlinedFont = getClass('.underlinedFont')
const crossedFont = getClass('.crossedFont')

const leftMarg = getClass('.leftMarg')
const centerMarg = getClass('.centerMarg')
const rightMarg = getClass('.rightMarg')

const font = getClass('.font')
const fontSize = getClass('.fontSize')
const fontColor = getClass('.fontColor')
const fontBack = getClass('.fontBack')

let htmlChek = false

let boldFontChek = false
let italicFontChek = false
let underlinedFontChek = false
let crossedFontChek = false

let leftMargChek = false
let centerMargChek = false
let rightMargChek = false

let fontChek = false
let fontSizeChek = false

let signInBlockChek = false

let backgroundcolorBlockChek = true
let backgroundImagesChek = false
let backgroundFilesChek = false


const signInBlock = getClass('.signInBlock')

const fontSelected = getClass('.fontSelected')
const fontSizeSelected = getClass('.fontSizeSelected')
const colorSelected = getClass('.colorSelected')
const colorClose = getClass('.colorClose')

const backgroundcolorBlock = getClass('.backgroundcolorBlock')
const backgroundImages = getClass('.backgroundImages')
const backgroundFiles = getClass('.backgroundFiles')
const backgroundcolorClose = getClass('.backgroundcolorClose')
const backgroundcolorSelected = getClass('.backgroundcolorSelected')

const colorChoiceOne = getClass('.colorChoiceOne')
const colorChoiceTwo = getClass('.colorChoiceTwo')
const colorChoiceThree = getClass('.colorChoiceThree')

const inp = getClass('.inp')
const signIn = getClass('.signIn')
let username = /admin/;
const login = getId('login')
const password = getId('password')
const signInBtn = getId('signInBtn')
const valid = getClass('.valid')
const signInContentSpanOne = getClass('.signInContentSpanOne')
const signInContentSpanTwo = getClass('.signInContentSpanTwo')
const headBlock = getClass('.headBlock')
const headBlockTwo = getClass('.headBlockTwo')
const textArea = getClass('.textArea')

const save = getClass('.save')
const createTable = getClass('.createTable')
const createOi = getClass('.createOi')
const createUi = getClass('.createUi')
const createTableBlock = getClass('.createTableBlock')
const createOiBlock = getClass('.createOiBlock')
const createUiBlock = getClass('.createUiBlock')

const createTableExit = getClass('.createTableExit')
const createOiExit = getClass('.createOiExit')
const createUiExit = getClass('.createUiExit')

const createTableBtnRes = getClass('.createTableBtnRes')
const createTableBtnCreate = getClass('.createTableBtnCreate')
const invalidValue = getClass('.invalidValue')
const createOiBtnRes = getClass('.createOiBtnRes')
const createOiBtnCreate = getClass('.createOiBtnCreate')
const createUiBtnRes = getClass('.createUiBtnRes')
const createUiBtnCreate = getClass('.createUiBtnCreate')


createUiBtnCreate.onclick = function(){
    const createInpUl = getClass('.createInpUl').value;
    const createSelectUl = getClass('.createSelectUl').value;
    const ulInputs = document.querySelectorAll('.ulInputs');
    const invalidValueUl = getClass('.invalidValueUl');
    const createUl = ()=>{
        const columUl = document.createElement('ul')
        columUl.style.listStyleType = `${createSelectUl}`
        for(i=0; i<createInpUl; i++){
        const li = document.createElement('li')
        li.innerText =`item ${i+1}`

        columUl.appendChild(li)
    }
    textArea.value += columUl.outerHTML
    }
    let isInputValidOi = true;
    
    ulInputs.forEach(function(input){
        if (input.value === ""){
            input.classList.add('error');
            invalidValueUl.style.display = "block"
            isInputValidOi =  false;
        }else{
            input.classList.remove('error');
            invalidValueUl.style.display = "none"
        }
    });
    if(isInputValidOi === true){
        createUl()
    }
}
createOiBtnRes.onclick = function(){
    document.querySelectorAll('.oiInputs').forEach((element)=>{
        element.value = "";
    });
}
createOiBtnCreate.onclick = function(){
    const createInp = getClass('.createInp').value;
    const createSelectOi = getClass('.createSelectOi').value;
    const oiInputs = document.querySelectorAll('.oiInputs');
    const invalidValueOi = getClass('.invalidValueOi');
    const createOi = ()=>{
        const columOl = document.createElement('ol')
        columOl.style.listStyleType = `${createSelectOi}`
        for(i=0; i<createInp; i++){
        const li = document.createElement('li')
        li.innerText =`item ${i+1}`

        columOl.appendChild(li)
    }
    textArea.value += columOl.outerHTML
    }
    let isInputValidOi = true;
    
    oiInputs.forEach(function(input){
        if (input.value === ""){
            input.classList.add('error');
            invalidValueOi.style.display = "block"
            isInputValidOi =  false;
        }else{
            input.classList.remove('error');
            invalidValueOi.style.display = "none"
        }
    });
    if(isInputValidOi === true){
        createOi()
    }
}
createTableBtnRes.onclick = function(){
    document.querySelectorAll('.tableInputs').forEach((element)=>{
        element.value = "";
    });
}
createTableBtnCreate.onclick = function(){
    let countTr = getId('countTr').value;
    let countTd = getId('countTd').value;
    let widthTr = getId('widthTr').value;
    let heightTd = getId('heightTd').value;
    let widthBorder = getId('widthBorder').value;
    let styleBorderSel = getClass('.styleBorderSel').value;
    let colorBorderSel = getClass('.colorBorderSel').value;
    let tableInputs = document.querySelectorAll('.tableInputs');
    const createTable =()=>{
        const userTable = document.createElement('table');

        for(let i =0; i<countTr; i++){
            const tr = document.createElement('tr')
            for(let j =0; j<countTd; j++){
                const td = document.createElement('td');
                td.style.width =`${widthTr}px`
                td.style.height =`${heightTd}px`
                td.style.border =`${widthBorder}px ${styleBorderSel} ${colorBorderSel}`
                td.innerText = 'TD';
                tr.appendChild(td)
            }
            userTable.appendChild(tr);
        }
        textArea.value += userTable.outerHTML
    }
    let isInputValid = true;
    
    tableInputs.forEach(function(input){
        if (input.value === ""){
            input.classList.add('error');
            invalidValue.style.display = "block"
            isInputValid =  false;
        }else{
            input.classList.remove('error');
            invalidValue.style.display = "none"
        }
    });
    if(isInputValid === true){
        createTable()
    }
}
createTableExit.onclick = function(){
    createTableBlock.style.display = "none"
}
createOiExit.onclick = function(){
    createOiBlock.style.display = "none"
}
createUiExit.onclick = function(){
    createUiBlock.style.display = "none"
}
createUi.onclick = function(){
    createUiBlock.style.display = "block"
}
createOi.onclick = function(){
    createOiBlock.style.display = "block"
}
createTable.onclick = function(){
    createTableBlock.style.display = "block"
}
save.onclick = function(){
    content.innerHTML = textArea.value
    headBlock.style.display = "flex"
    headBlockTwo.style.display = "none"
    content.style.display = "block"
    textArea.style.display = "none"
}
html.onclick = function(){
    if(htmlChek == true){
        headBlock.style.display = "none"
        headBlockTwo.style.display = "flex"
        content.style.display = "none"
        textArea.style.display = "block"
        textArea.value = content.innerHTML
    }
}
signInBtn.onclick = function(){
    if(username.test(login.value)){
        if(username.test(password.value)){
        html.style.backgroundColor = "aliceblue"
        htmlChek = true
        signIn.style.display = "none";
        signInBlock.style.backgroundImage = "url(./img/icons8-разблокировать-24.png)"
    }
    }else if(login.value.length == 0){
        signInContentSpanOne.style.display = "block"
    }else{
        login.classList.add('invalid')
        login.classList.remove('valid')
        password.classList.add('invalid')
        password.classList.remove('valid')
        signInContentSpanOne.style.display = "none"
        signInContentSpanTwo.style.display = "block"
    }
}
window.onclick = function(event) {
    if (event.target === signIn) {
        signIn.style.display = "none";
        createTableBlock.style.display = "none";
    }
}
signInBlock.onclick = function(){
    signIn.style.display = 'block'
}
inp.addEventListener('change', ()=>{
    const File = document.getElementById('123').files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('conTent').style.backgroundImage = "url(" + reader.result + ")";
    }
    if(File){
        reader.readAsDataURL(File);
    }}
)
document.querySelectorAll('.imag').forEach((element)=>{
    element.addEventListener('click', () => {
        const backgroundImgSel = getComputedStyle(element).backgroundImage
        content.style.backgroundImage = backgroundImgSel
    })
})
colorChoiceThree.onclick = function(){
    backgroundcolorBlock.style.display = "none"
    backgroundImages.style.display = "none"
    backgroundFiles.style.display = "flex"
}
colorChoiceTwo.onclick = function(){
    backgroundcolorBlock.style.display = "none"
    backgroundImages.style.display = "flex"
    backgroundFiles.style.display = "none"
}
colorChoiceOne.onclick = function(){
    backgroundcolorBlock.style.display = "flex"
    backgroundImages.style.display = "none"
    backgroundFiles.style.display = "none"
}
fontBack.onclick = function(){
    backgroundcolorSelected.style.display = "block"
}
backgroundcolorClose.onclick = function(){
    backgroundcolorSelected.style.display = "none"
}
document.querySelectorAll('.backgroundColor').forEach((element)=>{
    element.addEventListener('click', () => {
        const backgroundColorSel = getComputedStyle(element).backgroundColor
        content.style.backgroundColor = backgroundColorSel
        content.style.backgroundImage = "none"
    })
})
document.querySelectorAll('.color').forEach((element)=>{
    element.addEventListener('click', () => {
        const fontColorSel = getComputedStyle(element).backgroundColor
        content.style.color = fontColorSel
    })
})
colorClose.onclick = function(){
    colorSelected.style.display = "none"
}
fontColor.onclick = function(){
    colorSelected.style.display = "block"
}
document.querySelectorAll('.fontSizeSel').forEach((element)=>{
    element.addEventListener('click', () => {
        const fontSizeSelSel = getComputedStyle(element).fontSize
        content.style.fontSize = fontSizeSelSel
    })
})
fontSize.onclick = function(){
    if(fontSizeChek === false){
        fontSizeSelected.style.display = "block"
        fontSize.style.backgroundColor = "rgb(185, 187, 188)"
        fontSizeChek = true
        fontSelected.style.display = "none"
        fontChek = false
        font.style.backgroundColor = "aliceblue"
    }else{
        fontSizeSelected.style.display = "none"
        fontSize.style.backgroundColor = "aliceblue"
        fontSizeChek = false
    }
}
document.querySelectorAll('.fontSelectedLi').forEach((element)=>{
    element.addEventListener('click', () => {
        const fontFamilySel = getComputedStyle(element).fontFamily
        content.style.fontFamily = fontFamilySel
    })
})
font.onclick = function(){
    if(fontChek === false){
        fontSelected.style.display = "block"
        font.style.backgroundColor = "rgb(185, 187, 188)"
        fontChek = true
        fontSizeSelected.style.display = "none"
        fontSize.style.backgroundColor = "aliceblue"
        fontSizeChek = false
    }else{
        fontSelected.style.display = "none"
        fontChek = false
        font.style.backgroundColor = "aliceblue"
    }
}
boldFont.onclick = function(){
    if(boldFontChek === false){
        content.style.fontWeight = "bold";
        boldFont.style.backgroundColor = "rgb(185, 187, 188)"
        boldFontChek = true
    }else{
        content.style.fontWeight = "normal";
        boldFont.style.backgroundColor = "aliceblue"
        boldFontChek = false
    }
}
italicFont.onclick = function(){
    if(italicFontChek === false){
        content.style.fontStyle = "oblique";
        italicFont.style.backgroundColor = "rgb(185, 187, 188)"
        italicFontChek = true
    }else{
        content.style.fontStyle = "normal";
        italicFont.style.backgroundColor = "aliceblue"
        italicFontChek = false
    }
}
underlinedFont.onclick = function(){
    if(underlinedFontChek === false){
        content.style.textDecoration = "underline";
        underlinedFont.style.backgroundColor = "rgb(185, 187, 188)"
        boldFontChek = false
        italicFontChek = false
        underlinedFontChek = true
        crossedFontChek = false
        crossedFont.style.backgroundColor = "aliceblue"
    }else{
        content.style.textDecoration = "none";
        underlinedFont.style.backgroundColor = "aliceblue"
        underlinedFontChek = false
    }
}
crossedFont.onclick = function(){
    if(crossedFontChek === false){
        content.style.textDecoration = "line-through";
        crossedFont.style.backgroundColor = "rgb(185, 187, 188)"
        boldFontChek = false
        italicFontChek = false
        underlinedFontChek = false
        crossedFontChek = true
        underlinedFont.style.backgroundColor = "aliceblue"
    }else{
        content.style.textDecoration = "none";
        crossedFont.style.backgroundColor = "aliceblue"
        crossedFontChek = false
    }
}
leftMarg.onclick = function(){
    if(leftMargChek ===false){
        content.style.textAlign = "left"
        leftMarg.style.backgroundColor = "rgb(185, 187, 188)"
        leftMargChek = true
        centerMargChek = false
        rightMargChek = false
        centerMarg.style.backgroundColor = "aliceblue"
        rightMarg.style.backgroundColor = "aliceblue"
    }else{
        leftMarg.style.backgroundColor = "aliceblue"
        leftMargChek = false
    }
}
centerMarg.onclick = function(){
    if(centerMargChek ===false){
        content.style.textAlign = "center"
        centerMarg.style.backgroundColor = "rgb(185, 187, 188)"
        leftMargChek = false
        centerMargChek = true
        rightMargChek = false
        leftMarg.style.backgroundColor = "aliceblue"
        rightMarg.style.backgroundColor = "aliceblue"
    }else{
        content.style.textAlign = "left"
        centerMarg.style.backgroundColor = "aliceblue"
        centerMargChek = false
    }
}
rightMarg.onclick = function(){
    if(rightMargChek ===false){
        content.style.textAlign = "right"
        rightMarg.style.backgroundColor = "rgb(185, 187, 188)"
        leftMargChek = false
        centerMargChek = false
        rightMargChek = true
        leftMarg.style.backgroundColor = "aliceblue"
        centerMarg.style.backgroundColor = "aliceblue"
    }else{
        content.style.textAlign = "left"
        rightMarg.style.backgroundColor = "aliceblue"
        rightMargChek = false
    }
}


































