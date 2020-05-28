function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.getElementById('realtime').innerHTML = h + ":" + m + ":" + s;
}

setInterval(time,1000);
document.getElementById('wakeUptime')





function setResult(){

    var wake = Number(document.getElementById('wakeUptime').value);
    var lunch = Number(document.getElementById('lunch').value);
    var read = Number(document.getElementById('reading').value);
    var d = new Date();
    var result = '';
    var hour = d.getHours();

        if(hour==wake){
            result = 'Get up dude!';
            document.querySelector('img').src = 'https://pbs.twimg.com/media/DvkSb9vWoAEavHz.jpg';
        }else if(hour==lunch){
            result = "It's the lunch time";
            document.querySelector('img').src = 'https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/18/1_4691731.png?cache_timestamp=1574134871525';
        }else if(hour==read){
            result = 'Time to read some real stuff';
            document.querySelector('img').src = "https://pbs.twimg.com/media/Dkb7KRNXgAAlsUW.jpg"
        }else{
            result = 'Hi fellas! NYAN NYAN';
            document.querySelector('img').src = 'https://i.imgur.com/Nz3ylpJ.jpg';
        }
        document.getElementById('img-txt').innerHTML = result;
        
}

function party(){
    document.getElementById('img-txt').innerHTML = 'PARTY TIME BIATCHESS!!';
    document.querySelector('img').src = 'https://media.giphy.com/media/Ntzhde6z3kosE/giphy_s.gif';
}

setInterval(setResult,20000);





