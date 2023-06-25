function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function casme(){
  window.open("https://minecraftteet.github.io/zClock/",'_self')
}
function go(){
    await sleep(50000)
    var input = document.getElementById("tom").value;
    window.open('https://duckduckgo.com/'+input,'_self');
}
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        go()
    }
});
function yt(){
    var input = document.getElementById("tom").value;
    window.open('https://www.youtube.com/results?search_query='+input,'_self');
}
function so(){
    var input = document.getElementById("tom").value;
    window.open('https://stackoverflow.com/search?q='+input,'_self');
}
function red(){
    var input = document.getElementById("tom").value;
    window.open('https://www.reddit.com/search/?q='+input,'_self');
};
function amz(){
  var input = document.getElementById("tom").value;
  window.open('https://www.amazon.com/s?k='+input,'_self');
}
function sgh(){
  var input = document.getElementById("tom").value;
  window.open('https://github.com/minecraftteet/zOogle/search?q='+input,'_self');
};
function fb(){
  var input = document.getElementById("tom").value;
  window.open('https://m.facebook.com//search/?q='+input,'_self');
}
function wallm(){
  var input = document.getElementById("tom").value;
    window.open('https://www.walmart.com/search?q='+input,'_self');
}
function apple(){
  var input = document.getElementById("tom").value;
    window.open('https://www.apple.com/us/search/'+input,'_self');
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

    
  if(hh > 12){
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000); 

}

currentTime();
function github(){
  window.open('https://github.com/minecraftteet','_self');
};
