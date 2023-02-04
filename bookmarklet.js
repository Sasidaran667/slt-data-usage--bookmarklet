javascript:log=function(){
day_used = document.getElementsByClassName("used-of")[0].innerHTML.split(" ")[0] + 0;
day_total = document.getElementsByClassName("used-of")[0].innerHTML.split(" ")[4] + 0;
day_balance = day_total - day_used;
both_used = document.getElementsByClassName("used-of")[1].innerHTML.split(" ")[0] + 0;
both_total = document.getElementsByClassName("used-of")[1].innerHTML.split(" ")[4] + 0;
both_balance = both_total - both_used;
night_total = both_total - day_total;
night_used = both_used - day_used; 
night_balance = night_total - night_used;
document.getElementsByClassName("used-of")[0].innerHTML = "DAY : " + document.getElementsByClassName("used-of")[0].innerHTML + " (" + day_balance.toFixed(2) + " GB)";
document.getElementsByClassName("used-of")[0].innerHTML += "</br> NIGHT : " + night_used.toFixed(2) + " GB USED OF " + night_total.toFixed(2) + " GB (" + night_balance.toFixed(2) + " GB)"; 
document.getElementsByClassName("used-of")[0].innerHTML += "</br> BOTH : " + both_used + " GB USED OF " + both_total + " GB (" + both_balance.toFixed(2) + " GB)";  
};
log();
