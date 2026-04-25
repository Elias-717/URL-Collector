let myUrls = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const urlsFromLocalStorage = JSON.parse( localStorage.getItem("myUrls") ) 
const tabBtn = document.getElementById("tab-btn")

if (urlsFromLocalStorage) {
    myUrls = urlsFromLocalStorage
    localStorage.setItem("myUrls", JSON.stringify(myUrls) )
    render(myUrls)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myUrls.push(tabs[0].url)
        localStorage.setItem("myUrls", JSON.stringify(myUrls) )
        render(myUrls)
    })
})

function render(urls) {
    let listItems = ""
    for (let i = 0; i < urls.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${urls[i]}'>
                    ${urls[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myUrls = []
    render(myUrls)
})

inputBtn.addEventListener("click", function() {
    myUrls.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myUrls", JSON.stringify(myUrls) )
    render(myUrls)
})