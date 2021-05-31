

function More() {
    var about = document.getElementById("about2");
    var btnText = document.getElementById("More");
    var abou = document.getElementById("abou");
    btnText.style.color = "red"; 
 
    if (about.style.display === "none") {
      about.style.display = "inline";
      abou.style.display = "block";
      btnText.innerHTML = " 🡩 Less" ; 
     
    } else {
      about.style.display = "none";
      abou.style.display = "none";
      btnText.innerHTML ="🡫 More"; 

 
    }
  }
  export {More}