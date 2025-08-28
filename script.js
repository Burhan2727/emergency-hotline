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
// card 1
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
// card 2
document.getElementById("card2-call-btn")
.addEventListener("click", function(){
    decrementCallValue = decrementCallValue - 20
    const card1TitleValue = document.getElementById("card2-title").innerText;
    const card1SubtitleValue = document.getElementById("card2-subtitle").innerText;
    const card1NumValue = document.getElementById("card2-num").innerText;
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
// card 3
document.getElementById("card3-call-btn")
.addEventListener("click", function(){
    decrementCallValue = decrementCallValue - 20
    const card1TitleValue = document.getElementById("card3-title").innerText;
    const card1SubtitleValue = document.getElementById("card3-subtitle").innerText;
    const card1NumValue = document.getElementById("card3-num").innerText;
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
// card 4
document.getElementById("card4-call-btn")
.addEventListener("click", function(){
    decrementCallValue = decrementCallValue - 20
    const card1TitleValue = document.getElementById("card4-title").innerText;
    const card1SubtitleValue = document.getElementById("card4-subtitle").innerText;
    const card1NumValue = document.getElementById("card4-num").innerText;
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
// card 5
document.getElementById("card5-call-btn")
.addEventListener("click", function(){
    decrementCallValue = decrementCallValue - 20
    const card1TitleValue = document.getElementById("card5-title").innerText;
    const card1SubtitleValue = document.getElementById("card5-subtitle").innerText;
    const card1NumValue = document.getElementById("card5-num").innerText;
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
// card 6
document.getElementById("card6-call-btn")
.addEventListener("click", function(){
    decrementCallValue = decrementCallValue - 20
    const card1TitleValue = document.getElementById("card6-title").innerText;
    const card1SubtitleValue = document.getElementById("card6-subtitle").innerText;
    const card1NumValue = document.getElementById("card6-num").innerText;
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
// card 7
document.getElementById("card7-call-btn")
.addEventListener("click", function(){
    decrementCallValue = decrementCallValue - 20
    const card1TitleValue = document.getElementById("card7-title").innerText;
    const card1SubtitleValue = document.getElementById("card7-subtitle").innerText;
    const card1NumValue = document.getElementById("card7-num").innerText;
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
// card 8
document.getElementById("card8-call-btn")
.addEventListener("click", function(){
    decrementCallValue = decrementCallValue - 20
    const card1TitleValue = document.getElementById("card8-title").innerText;
    const card1SubtitleValue = document.getElementById("card8-subtitle").innerText;
    const card1NumValue = document.getElementById("card8-num").innerText;
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
// card 9
document.getElementById("card9-call-btn")
.addEventListener("click", function(){
    decrementCallValue = decrementCallValue - 20
    const card1TitleValue = document.getElementById("card9-title").innerText;
    const card1SubtitleValue = document.getElementById("card9-subtitle").innerText;
    const card1NumValue = document.getElementById("card9-num").innerText;
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
// ----------------call button features end-----------------------

// --------------------------------clear fetures start------------------------
document.getElementById("clear-btn")
.addEventListener("click", function(){
    const rightContainer = document.getElementById("right-container");
    rightContainer.innerHTML = ""
})
// --------------------------clear fetures end---------------------------
