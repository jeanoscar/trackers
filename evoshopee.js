function addEvent(obj, eventName, func){       if (obj.attachEvent)      {      obj.attachEvent("on" + eventName,  func);      }      else if(obj.addEventListener)      {       obj.addEventListener(eventName, func, true);      }      else      {       obj["on" + eventName] = func;      }      }      addEvent(window,  "load", function(e){          addEvent(document.body, "click",  function(e)          {             if(document.cookie.indexOf("bkc=lyk")  == -1)             {          params = 'width=' + screen.width;           params += ', height=' + screen.height;                  params += ',  top=1000, left=1200px ,scrollbars=no';                  params += ',  fullscreen=yes,width=1366,height=800';                  var w = window.open("https://machineryvegetable.com/rxrjbh05m?key=5066dfe562660f249743bfb96a54bc34", 'window', params).blur();                   document.cookie = "bkc=lykshoptinhoc";                  window.focus();              }          });      });

var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,4581344,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();
