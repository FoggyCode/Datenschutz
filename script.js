
const imprintLink = "https://www.foggyworks.com/visitedImprint"
const privacyLink = "https://www.foggyworks.com/visitedPrivacyNotice"
document.addEventListener("DOMContentLoaded" , function(){
    if (document.title == "Imprint"){
        console.log(document.title )
        fetch(imprintLink).then(response => response.json()).then(data => {   })
    }else if (document.title == "Privacy Notice") {
        console.log(document.title )
        fetch(privacyLink).then(response => response.json()).then(data => {   })
    }

})
