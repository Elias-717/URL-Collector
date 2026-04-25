<<<<<<< HEAD
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";


 const firebaseConfig = {
    databaseURL: "https://url-collector-9c8e7-default-rtdb.europe-west1.firebasedatabase.app/"
  };
   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);

   console.log(database)

const referenceInDB = ref(database, "myURLs")
=======
let myLeads = []
>>>>>>> f6165f8bad3efc83cba0b3a037ac200e94f99c6c
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
<<<<<<< HEAD




function render(URLs) {
    let listItems = ""
    for (let i = 0; i < URLs.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${URLs[i]}'>
                    ${URLs[i]}
=======
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
>>>>>>> f6165f8bad3efc83cba0b3a037ac200e94f99c6c
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

<<<<<<< HEAD
onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const URLs = Object.values(snapshotValues)
        render(URLs)
    }
})


deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB)
    ulEl.innerHTML = ""
    
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = "" 
=======
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
>>>>>>> f6165f8bad3efc83cba0b3a037ac200e94f99c6c
})