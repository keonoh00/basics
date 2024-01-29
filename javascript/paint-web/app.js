const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
// colors are HTML Collection
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    // clientX, Y indicates the coordinate of whole window and offsetX, Y indicates coordinate in div which is canvas
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const rangeSize = event.target.value;
    ctx.lineWidth = rangeSize;
}

function handleModeClick(event) {
    console.log(event)
    if (filling) {
        filling = false;
        mode.innerText = "Draw Mode";
    } else {

        filling = true;
        mode.innerText = "Paint Mode";
    }
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleRightClickCanvas(event){
    event.preventDefault();
}

function saveCanvas() {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image
    link.download = "Your Work![🎨]😄";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleRightClickCanvas);
}

// Convert from HTML Collection to array
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

// if change in range is applied
if (range) {
    range.addEventListener("input", handleRangeChange);
}

// if paint/draw button is clicked
if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", saveCanvas);
}