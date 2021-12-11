        //<script>
          const timeElement = document.getElementById('time');
          const start = document.getElementById('start');
          const stop = document.getElementById('stop');
          const reset = document.getElementById('reset');
          
          //経過時間のミリ秒
          let elapsed = 0;
          
          let intervalId = null;
          
          function updateTime() {
            const ms = Math.floor(elapsed % 1000);
            const s = Math.floor(elapsed % 60000 / 1000);
            const m = Math.floor(elapsed / (1000*60)) % 60;
            const h = Math.floor(elapsed /(1000*60*60));
            
            const msStr = ms.toString().padStart(1, '0');
            const sStr = s.toString().padStart(1, '0');
            const mStr = m.toString().padStart(1, '0');
            const hStr = h.toString().padStart(1, '0');
            
            timeElement.innerHTML = `${hStr}:${mStr}:${sStr}:${msStr}`;
          }
          
          start.addEventListener('click', function(e) {
            if(intervalId !== null) { return; }
            let pre = new Date();
            intervalId = setInterval(function() {
              let now = new Date();
              elapsed += now - pre;
              pre = now;
              updateTime();
            },1000);
          });
          
          stop.addEventListener('click', function(e) {
              clearInterval(intervalId);
              intervalId = null;
          });
          
          reset.addEventListener('click', function(e) {
            elapsed = 0;
            updateTime();
          });
        //</script>