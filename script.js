$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});


function changeImage(url, clr) {
  document.getElementById("projImage").src = url;
  document.getElementsByClassName("workBody")[0].style.backgroundColor = clr;
  document.getElementsByClassName("frame")[0].style.borderColor = clr;
  // document.getElementById("projImage").classList.remove("animation-reverse")
  document.getElementById("projImage").classList.remove("animation-active");
  setTimeout(function() {
    document.getElementById("projImage").classList.add("animation-active");
  }, 100);
}

window.addEventListener("scroll", function(evt) {
	try {
			
		if (window.scrollY <document.querySelector(".footer").offsetTop-550) {
			document.getElementsByClassName("navNum")[0].classList.remove("hide");
		} else {
			document.getElementsByClassName("navNum")[0].classList.add("hide");
		}
	} catch (error) {
		
	}
	try {
		if (window.scrollY>document.getElementById("about").clientHeight*0.8){
			console.log("starttype")
			if (!typeStarted){
				startTypeAllText()
			}
		}
	} catch (error) {
		
	}
	try {
		
		if (window.scrollY < 400) {
		  document.getElementsByClassName("frame")[0].classList.remove("hide");
		} else {
		  document.getElementsByClassName("frame")[0].classList.add("hide");
		}
	} catch (error) {
		
	}
});
function reverse() {
  document.getElementById("projImage").classList.add("animation-reverse");
}
function noreverse() {
  document.getElementById("projImage").classList.remove("animation-reverse");
}

var typeStarted = false

function startTypeWriter(text, elementId) {
    var aText = new Array(text);
    var iSpeed = 30; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines

    var iTextPos = 0; // initialise text position
    var sContents = ""; // initialise contents variable
    var iRow; // initialise current row

    function typewriter() {
      sContents = " ";
      iRow = Math.max(0, iIndex - iScrollAt);
      var destination = document.getElementById(elementId);

      while (iRow < iIndex) {
        sContents += aText[iRow++] + "<br />";
      }
      destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + "_";
      if (iTextPos++ == iArrLength) {
        iTextPos = 0;
		iIndex++;
		
        if (iIndex != aText.length) {
          iArrLength = aText[iIndex].length;
          setTimeout(typewriter, 500);
        }
      } else {
		  
		setTimeout(typewriter, iSpeed);
      }
    }

    typewriter();
  }

  function startTypeAllText(){
	typeStarted=true
		startTypeWriter(
		  `I’m KASPER Chou,<br>
		  3D Artist, Digital Art Director<br>
		  BORN IN Taiwan, LIVE IN NewYork<br>
		  SPECIALIZE IN<br>
		  3D Animation<br>
		  & Interactive Experiences`,
		  "typedtext"
		);
	  
		setTimeout(function(){
	  
		  startTypeWriter(
			  `
			   CURRENTLY STUDYING AT<br>
			   Integrated Digital Media AT<br>
			   NYU Tandon School of Engineering<br><br>
			   NOW AVAILABLE FOR YOU
			  `,
			  "typedtext2"
			);
	  
		},6000)

  }
$(document).ready(function() {
  $("a[href^='#']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate(
      {
        scrollTop: position
      },
      "slow"
    );
  });

  jQuery(function($) {
    // Cycle plugin
    $(".slides")
      .cycle({
        fx: "none",
        speed: 150,
        timeout: 5
      })
      .cycle("pause");

    // Pause &amp; play on hover
    $(".slideshow-block").hover(
      function() {
        $(this)
          .find(".slides")
          .addClass("active")
          .cycle("resume");
      },
      function() {
        $(this)
          .find(".slides")
          .removeClass("active")
          .cycle("pause");
      }
    );
  });

 
});


