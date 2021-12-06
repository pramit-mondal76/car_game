var m = 0;
var y;
function start() {
     y = setInterval(run, 100);

     
    function run() {
        if(m==1000){
            clearInterval(x);
            m=0;
        }
        else{
        m += 5;
        var x =document.getElementById("pramit");
        x.style.marginLeft = m + 'px';
        }


    }
}
function stop() {
    clearInterval(y);
}