// Do not mess with this file unless you know what you're doing :P

$(document).on('click', 'a[href^="#"]', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 900);
});

// This is for the click to copy
let t;
$(document).ready(()=>{
	t = $(".ip").html();
})
$(document).on("click",".ip",()=>{
	let copy = document.createElement("textarea");
	copy.style.position = "absolute";
	copy.style.left = "-99999px";
	copy.style.top = "0";
	copy.setAttribute("id", "ta");
	document.body.appendChild(copy);
	copy.textContent = t;
	copy.select();
	document.execCommand("copy");
	$(".ip").html("<span class='extrapad'>IP copied!</span>");
	setTimeout(function(){
		$(".ip").html(t);
		var copy = document.getElementById("ta");
		copy.parentNode.removeChild(copy);
	},1000);
});
let u;
$(document).ready(()=>{
	u = $(".ip2").html();
})
$(document).on("click",".ip2",()=>{
	let copy = document.createElement("textarea");
	copy.style.position = "absolute";
	copy.style.left = "-99999px";
	copy.style.top = "0";
	copy.setAttribute("id", "ta");
	document.body.appendChild(copy);
	copy.textContent = u;
	copy.select();
	document.execCommand("copy");
	$(".ip2").html("<span class='extrapad'>IP copied!</span>");
	setTimeout(function(){
		$(".ip2").html(u);
		var copy = document.getElementById("ta");
		copy.parentNode.removeChild(copy);
	},1000);
});
let v;
$(document).ready(()=>{
	v = $(".ip3").html();
})
$(document).on("click",".ip3",()=>{
	let copy = document.createElement("textarea");
	copy.style.position = "absolute";
	copy.style.left = "-99999px";
	copy.style.top = "0";
	copy.setAttribute("id", "ta");
	document.body.appendChild(copy);
	copy.textContent = v;
	copy.select();
	document.execCommand("copy");
	$(".ip3").html("<span class='extrapad'>Port copied!</span>");
	setTimeout(function(){
		$(".ip3").html(v);
		var copy = document.getElementById("ta");
		copy.parentNode.removeChild(copy);
	},1000);
});
let g;
$(document).ready(()=>{
	g = $(".ip4").html();
})
$(document).on("click",".ip4",()=>{
	let copy = document.createElement("textarea");
	copy.style.position = "absolute";
	copy.style.left = "-99999px";
	copy.style.top = "0";
	copy.setAttribute("id", "ta");
	document.body.appendChild(copy);
	copy.textContent = v;
	copy.select();
	document.execCommand("copy");
	$(".ip4").html("<span class='extrapad'>site copied!</span>");
	setTimeout(function(){
		$(".ip4").html(v);
		var copy = document.getElementById("ta");
		copy.parentNode.removeChild(copy);
	},1000);
});
// This is to fetch the player count
$(document).ready(()=>{
  const ip = $(".sip").attr("data-ip");
  const port = $(".sip").attr("data-port");

  $.get(`https://mcapi.us/server/status?ip=${ip}&port=${port}`, (result)=>{
    if (result.online) {
      $(".sip").html(result.players.now);
    } else {
      $(".playercount").html("Server isn't online!");
    }
  });

  setInterval(()=>{
    $.get(`https://mcapi.us/server/status?ip=${ip}&port=${port}`, (result)=>{
      if (result.online) {
        $(".sip").html(result.players.now);
      } else {
        $(".playercount").html("Server isn't online!");
      }
    });
  }, 500);
});
