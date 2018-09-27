!function(n){var I={};function g(t){if(I[t])return I[t].exports;var i=I[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,g),i.l=!0,i.exports}g.m=n,g.c=I,g.d=function(n,I,t){g.o(n,I)||Object.defineProperty(n,I,{enumerable:!0,get:t})},g.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},g.t=function(n,I){if(1&I&&(n=g(n)),8&I)return n;if(4&I&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(g.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&I&&"string"!=typeof n)for(var i in n)g.d(t,i,function(I){return n[I]}.bind(null,i));return t},g.n=function(n){var I=n&&n.__esModule?function(){return n.default}:function(){return n};return g.d(I,"a",I),I},g.o=function(n,I){return Object.prototype.hasOwnProperty.call(n,I)},g.p="",g(g.s=4)}({4:function(module,exports){eval('testWebSockets()\n.then(function(m) {\n    console.log("Connection to websockets is ok");\n})\n.catch(function(m) {\n    alert(m);\n});\n\n// intro.js test\n//startIntro();\n\n$(".slide").height(window.innerHeight);\n$(window).on(\'resize\',function() {\n    $(".slide").height(window.innerHeight);\n    $("#neurons").css({width:window.innerWidth});\n});\n\n// go to url button\n$("#go").click(goToURL);\n\n// video settings\nvar vid = document.getElementById("neurons");\nvid.playbackRate = 0.5;\nvid.onloadedmetadata = function() {\n    $("#neurons").css({width:window.innerWidth});\n};\n\n// List of brains\n$("#list").change(function(e) {\n    $("#url").val($("#list").val());\n});\n\nvar menuShowing = true;\n$(window).on(\'scroll\',function() {\n    var y = window.pageYOffset;\n    if(y>100 && menuShowing) {\n        $("#menu").css({top:-32, opacity:0});\n        menuShowing = false;\n        \n        $("#footer").show();\n    }\n    if(y<100 && !menuShowing) {\n        $("#menu").css({top:0, opacity:1});\n        menuShowing = true;\n    }\n});\n\n$("h2").css({marginLeft:0,opacity:1});\n\nvar version=1;\nvar brainsToTry=[\n    "https://zenodo.org/record/44855/files/MRI-n4.nii.gz",\n    "http://files.figshare.com/2284784/MRI_n4.nii.gz",\n    "https://dl.dropbox.com/s/cny5b3so267bv94/p32-f18-uchar.nii.gz",\n    "https://fcp-indi.s3.amazonaws.com/data/Projects/ABIDE_Initiative/RawData/NYU/0050952/session_1/anat_1/mprage.nii.gz"\n]\n\n// Present the history in localStorage if it exists.\n    if(localStorage.AtlasMaker) {\n        var stored=JSON.parse(localStorage.AtlasMaker);\n        if(stored.version && stored.version==version) {\n            var str = "<br/><p><b>Recently visited</b><br/>";\n            for(var i=stored.history.length-1;i>=Math.max(0,stored.history.length-10);i--) {\n                str += "<a href=\'"+location+"mri?url="+stored.history[i].url+"\'>"+stored.history[i].url+"</a><br />";\n                \n                /**\n                 * @todo Add image thumbnails\n                 */\n                /**/\n                if(stored.history[i].img) {\n                    $("#intro").append(\'<img src="\'+stored.history[i].img+\'"/>\');\n                }\n                /**/\n            }\n            str += "</p>";\n            $("#intro").append(str);\n        } else {\n            localStorage.clear();\n        }\n    }\n    if(localStorage.AtlasMaker==undefined || stored.history.length<5) {\n        var str="<br/><p><b>Some brains to try</b><br/>";\n        for(var i=0;i<brainsToTry.length;i++) {\n            str+="<a href=\'"+location+"mri?url="+brainsToTry[i]+"\'>"+brainsToTry[i]+"</a><br />";\n        }\n        str+="</p>";\n        $("#intro").append(str);\n    }\n\n// Add URL loading\n    $("#url").keyup(function(e) {\n        //console.log(e,e.target);\n        if (e.keyCode == 13) {\n            goToURL(e);\n        }\n    });\n\n// Connect addProject button\n    $("#addProject").click(function(){location="/project/new"});\n\nfunction goToURL() {\n    var url=$("#url").val();\n    location="/mri?url="+url;\n}\n/**\n * @function testWebSockets\n */\nfunction testWebSockets() {\n    return new Promise(function(resolve, reject) {\n        var host = "ws://ws.websocketstest.com:8080/service";\n        var ws;\n\n        if (window.WebSocket) {\n            ws=new WebSocket(host);\n        } else if (window.MozWebSocket) {\n            ws=new MozWebSocket(host);\n        } else {\n            reject("BrainBox requires access to WebSockets, but this web browser does not support them. Try Firefox, Chrome or Safari.");\n        }\n        ws.onopen = function(e) {\n            ws.close();\n            resolve("Connection ok");\n        };\n        ws.onerror = function(e) {\n            reject("BrainBox requires access to WebSockets, but your connection does not allow it. Ask your provider to allow WebSockets on port 8080");\n        };\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3L2JyYWluYm94L3NyYy9wYWdlcy9pbmRleC1wYWdlLmpzP2NlOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQyxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBLENBQUM7O0FBRUQsYUFBYSx1QkFBdUI7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0NBQXdDO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0Esc0NBQXNDLHdCQUF3Qjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidGVzdFdlYlNvY2tldHMoKVxuLnRoZW4oZnVuY3Rpb24obSkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiB0byB3ZWJzb2NrZXRzIGlzIG9rXCIpO1xufSlcbi5jYXRjaChmdW5jdGlvbihtKSB7XG4gICAgYWxlcnQobSk7XG59KTtcblxuLy8gaW50cm8uanMgdGVzdFxuLy9zdGFydEludHJvKCk7XG5cbiQoXCIuc2xpZGVcIikuaGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4kKHdpbmRvdykub24oJ3Jlc2l6ZScsZnVuY3Rpb24oKSB7XG4gICAgJChcIi5zbGlkZVwiKS5oZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAkKFwiI25ldXJvbnNcIikuY3NzKHt3aWR0aDp3aW5kb3cuaW5uZXJXaWR0aH0pO1xufSk7XG5cbi8vIGdvIHRvIHVybCBidXR0b25cbiQoXCIjZ29cIikuY2xpY2soZ29Ub1VSTCk7XG5cbi8vIHZpZGVvIHNldHRpbmdzXG52YXIgdmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXVyb25zXCIpO1xudmlkLnBsYXliYWNrUmF0ZSA9IDAuNTtcbnZpZC5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgJChcIiNuZXVyb25zXCIpLmNzcyh7d2lkdGg6d2luZG93LmlubmVyV2lkdGh9KTtcbn07XG5cbi8vIExpc3Qgb2YgYnJhaW5zXG4kKFwiI2xpc3RcIikuY2hhbmdlKGZ1bmN0aW9uKGUpIHtcbiAgICAkKFwiI3VybFwiKS52YWwoJChcIiNsaXN0XCIpLnZhbCgpKTtcbn0pO1xuXG52YXIgbWVudVNob3dpbmcgPSB0cnVlO1xuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCkge1xuICAgIHZhciB5ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGlmKHk+MTAwICYmIG1lbnVTaG93aW5nKSB7XG4gICAgICAgICQoXCIjbWVudVwiKS5jc3Moe3RvcDotMzIsIG9wYWNpdHk6MH0pO1xuICAgICAgICBtZW51U2hvd2luZyA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgJChcIiNmb290ZXJcIikuc2hvdygpO1xuICAgIH1cbiAgICBpZih5PDEwMCAmJiAhbWVudVNob3dpbmcpIHtcbiAgICAgICAgJChcIiNtZW51XCIpLmNzcyh7dG9wOjAsIG9wYWNpdHk6MX0pO1xuICAgICAgICBtZW51U2hvd2luZyA9IHRydWU7XG4gICAgfVxufSk7XG5cbiQoXCJoMlwiKS5jc3Moe21hcmdpbkxlZnQ6MCxvcGFjaXR5OjF9KTtcblxudmFyIHZlcnNpb249MTtcbnZhciBicmFpbnNUb1RyeT1bXG4gICAgXCJodHRwczovL3plbm9kby5vcmcvcmVjb3JkLzQ0ODU1L2ZpbGVzL01SSS1uNC5uaWkuZ3pcIixcbiAgICBcImh0dHA6Ly9maWxlcy5maWdzaGFyZS5jb20vMjI4NDc4NC9NUklfbjQubmlpLmd6XCIsXG4gICAgXCJodHRwczovL2RsLmRyb3Bib3guY29tL3MvY255NWIzc28yNjdidjk0L3AzMi1mMTgtdWNoYXIubmlpLmd6XCIsXG4gICAgXCJodHRwczovL2ZjcC1pbmRpLnMzLmFtYXpvbmF3cy5jb20vZGF0YS9Qcm9qZWN0cy9BQklERV9Jbml0aWF0aXZlL1Jhd0RhdGEvTllVLzAwNTA5NTIvc2Vzc2lvbl8xL2FuYXRfMS9tcHJhZ2UubmlpLmd6XCJcbl1cblxuLy8gUHJlc2VudCB0aGUgaGlzdG9yeSBpbiBsb2NhbFN0b3JhZ2UgaWYgaXQgZXhpc3RzLlxuICAgIGlmKGxvY2FsU3RvcmFnZS5BdGxhc01ha2VyKSB7XG4gICAgICAgIHZhciBzdG9yZWQ9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuQXRsYXNNYWtlcik7XG4gICAgICAgIGlmKHN0b3JlZC52ZXJzaW9uICYmIHN0b3JlZC52ZXJzaW9uPT12ZXJzaW9uKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gXCI8YnIvPjxwPjxiPlJlY2VudGx5IHZpc2l0ZWQ8L2I+PGJyLz5cIjtcbiAgICAgICAgICAgIGZvcih2YXIgaT1zdG9yZWQuaGlzdG9yeS5sZW5ndGgtMTtpPj1NYXRoLm1heCgwLHN0b3JlZC5oaXN0b3J5Lmxlbmd0aC0xMCk7aS0tKSB7XG4gICAgICAgICAgICAgICAgc3RyICs9IFwiPGEgaHJlZj0nXCIrbG9jYXRpb24rXCJtcmk/dXJsPVwiK3N0b3JlZC5oaXN0b3J5W2ldLnVybCtcIic+XCIrc3RvcmVkLmhpc3RvcnlbaV0udXJsK1wiPC9hPjxiciAvPlwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEB0b2RvIEFkZCBpbWFnZSB0aHVtYm5haWxzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLyoqL1xuICAgICAgICAgICAgICAgIGlmKHN0b3JlZC5oaXN0b3J5W2ldLmltZykge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2ludHJvXCIpLmFwcGVuZCgnPGltZyBzcmM9XCInK3N0b3JlZC5oaXN0b3J5W2ldLmltZysnXCIvPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHIgKz0gXCI8L3A+XCI7XG4gICAgICAgICAgICAkKFwiI2ludHJvXCIpLmFwcGVuZChzdHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYobG9jYWxTdG9yYWdlLkF0bGFzTWFrZXI9PXVuZGVmaW5lZCB8fCBzdG9yZWQuaGlzdG9yeS5sZW5ndGg8NSkge1xuICAgICAgICB2YXIgc3RyPVwiPGJyLz48cD48Yj5Tb21lIGJyYWlucyB0byB0cnk8L2I+PGJyLz5cIjtcbiAgICAgICAgZm9yKHZhciBpPTA7aTxicmFpbnNUb1RyeS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBzdHIrPVwiPGEgaHJlZj0nXCIrbG9jYXRpb24rXCJtcmk/dXJsPVwiK2JyYWluc1RvVHJ5W2ldK1wiJz5cIiticmFpbnNUb1RyeVtpXStcIjwvYT48YnIgLz5cIjtcbiAgICAgICAgfVxuICAgICAgICBzdHIrPVwiPC9wPlwiO1xuICAgICAgICAkKFwiI2ludHJvXCIpLmFwcGVuZChzdHIpO1xuICAgIH1cblxuLy8gQWRkIFVSTCBsb2FkaW5nXG4gICAgJChcIiN1cmxcIikua2V5dXAoZnVuY3Rpb24oZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGUsZS50YXJnZXQpO1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBnb1RvVVJMKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbi8vIENvbm5lY3QgYWRkUHJvamVjdCBidXR0b25cbiAgICAkKFwiI2FkZFByb2plY3RcIikuY2xpY2soZnVuY3Rpb24oKXtsb2NhdGlvbj1cIi9wcm9qZWN0L25ld1wifSk7XG5cbmZ1bmN0aW9uIGdvVG9VUkwoKSB7XG4gICAgdmFyIHVybD0kKFwiI3VybFwiKS52YWwoKTtcbiAgICBsb2NhdGlvbj1cIi9tcmk/dXJsPVwiK3VybDtcbn1cbi8qKlxuICogQGZ1bmN0aW9uIHRlc3RXZWJTb2NrZXRzXG4gKi9cbmZ1bmN0aW9uIHRlc3RXZWJTb2NrZXRzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGhvc3QgPSBcIndzOi8vd3Mud2Vic29ja2V0c3Rlc3QuY29tOjgwODAvc2VydmljZVwiO1xuICAgICAgICB2YXIgd3M7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5XZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIHdzPW5ldyBXZWJTb2NrZXQoaG9zdCk7XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93Lk1veldlYlNvY2tldCkge1xuICAgICAgICAgICAgd3M9bmV3IE1veldlYlNvY2tldChob3N0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChcIkJyYWluQm94IHJlcXVpcmVzIGFjY2VzcyB0byBXZWJTb2NrZXRzLCBidXQgdGhpcyB3ZWIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZW0uIFRyeSBGaXJlZm94LCBDaHJvbWUgb3IgU2FmYXJpLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB3cy5vbm9wZW4gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB3cy5jbG9zZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShcIkNvbm5lY3Rpb24gb2tcIik7XG4gICAgICAgIH07XG4gICAgICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZWplY3QoXCJCcmFpbkJveCByZXF1aXJlcyBhY2Nlc3MgdG8gV2ViU29ja2V0cywgYnV0IHlvdXIgY29ubmVjdGlvbiBkb2VzIG5vdCBhbGxvdyBpdC4gQXNrIHlvdXIgcHJvdmlkZXIgdG8gYWxsb3cgV2ViU29ja2V0cyBvbiBwb3J0IDgwODBcIik7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n')}});