// -----------------love count increase start-----------------------
let loveCountValue = parseInt(document.getElementById("love-count").innerText)
// card 1 love
document.getElementById("love1")
.addEventListener("click", function(){
    loveCountValue = loveCountValue + 1
    document.getElementById("love-count").innerText = loveCountValue
})
// card 2 love
document.getElementById("love2")
.addEventListener("click", function(){
    loveCountValue = loveCountValue + 1
    document.getElementById("love-count").innerText = loveCountValue
})
// card 3 love
document.getElementById("love3")
.addEventListener("click", function(){
    loveCountValue = loveCountValue + 1
    document.getElementById("love-count").innerText = loveCountValue
})
// card 4 love
document.getElementById("love4")
.addEventListener("click", function(){
    loveCountValue = loveCountValue + 1
    document.getElementById("love-count").innerText = loveCountValue
})
// card 5 love
document.getElementById("love5")
.addEventListener("click", function(){
    loveCountValue = loveCountValue + 1
    document.getElementById("love-count").innerText = loveCountValue
})
// card 6 love
document.getElementById("love6")
.addEventListener("click", function(){
    loveCountValue = loveCountValue + 1
    document.getElementById("love-count").innerText = loveCountValue
})
// card 7 love
document.getElementById("love7")
.addEventListener("click", function(){
    loveCountValue = loveCountValue + 1
    document.getElementById("love-count").innerText = loveCountValue
})
// card 8 love
document.getElementById("love8")
.addEventListener("click", function(){
    loveCountValue = loveCountValue + 1
    document.getElementById("love-count").innerText = loveCountValue
})
// card 9 love
document.getElementById("love9")
.addEventListener("click", function(){
    loveCountValue = loveCountValue + 1
    document.getElementById("love-count").innerText = loveCountValue
})
// --------------------love count increase end----------------------

// ----------------call button features start-----------------------
let decrementCallValue = parseInt(document.getElementById("decrement-call").innerText);
document.getElementById("card1-call-btn")
.addEventListener("click", function(){
    decrementCallValue = decrementCallValue - 20
    const card1TitleValue = document.getElementById("card1-title").innerText;
    const card1SubtitleValue = document.getElementById("card1-subtitle").innerText;
    const card1NumValue = document.getElementById("card1-num").innerText;
    if(decrementCallValue < 0){
        alert("Insufficient Coin! you need minimum 20 coins for calling")
        return
    }
    alert(`calling ${card1SubtitleValue} ${card1NumValue}`)
    
    document.getElementById("decrement-call").innerText = decrementCallValue;
    const date = new Date().toLocaleTimeString()
    const rightContainer = document.getElementById("right-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <div
              class="bg-[#FAFAFA] flex justify-between items-center p-2 rounded-lg mb-2"
            >
              <div>
                <h1 class="text-sm font-semibold">${card1TitleValue}</h1>
                <span class="text-gray-600">${card1NumValue}</span>
              </div>
              <div>
                <p class="text-gray-600">${date}</p>
              </div>
            </div>
    `
    rightContainer.appendChild(div)
})
// clear fetures start
document.getElementById("clear-btn")
.addEventListener("click", function(){
    const rightContainer = document.getElementById("right-container");
    rightContainer.innerHTML = ""
})
// clear fetures end
// ----------------call button features end-----------------------