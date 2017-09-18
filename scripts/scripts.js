$(function() {
  $(".projtoggle").on("click", function() {
    var plus = "+";
    var minus = "-";
    console.log($(this));
    $(this)
      .next()
      .slideToggle("slow");
    if ($(this).text() === "◆ Projects & Work Samples") {
      $(this).text("◇ Projects & Work Samples");
    } else {
      $(this).text("◆ Projects & Work Samples");
    }
  });

  var offset2 = $(document).height();
  var lineHF = offset2 - $("#bottommark").position().top;

  $(window).scroll(function() {
    var offset1 = $(document).height();
    var offset = $(window).scrollTop();
    var lineH = offset1 - $("#bottommark").position().top - offset;
    var lineHpart = lineHF / 10;

    $("span").html(lineH);
    if (lineH > lineHpart * 9) {
      $("#animation").attr("src", "http://i.imgur.com/g9zK1Sg.png");
    }
    if (lineH < lineHpart * 9 && lineH > lineHpart * 8) {
      $("#animation").attr("src", "http://i.imgur.com/eBDzgx8.png");
    }
    if (lineH < lineHpart * 8 && lineH > lineHpart * 7) {
      $("#animation").attr("src", "http://i.imgur.com/fEYLLsy.png");
    }
    if (lineH < lineHpart * 7 && lineH > lineHpart * 6) {
      $("#animation").attr("src", "http://i.imgur.com/pv0Am61.png");
    }
    if (lineH < lineHpart * 6 && lineH > lineHpart * 5) {
      $("#animation").attr("src", "http://i.imgur.com/D7yGYmM.png");
    }
    if (lineH < lineHpart * 5 && lineH > lineHpart * 4) {
      $("#animation").attr("src", "http://i.imgur.com/el7CK2H.png");
    }
    if (lineH < lineHpart * 4 && lineH > lineHpart * 3) {
      $("#animation").attr("src", "http://i.imgur.com/LI2It3M.png");
    }
    if (lineH < lineHpart * 3 && lineH > lineHpart * 2) {
      $("#animation").attr("src", "http://i.imgur.com/Mb9jUVk.png");
    }
    if (lineH < lineHpart * 2 && lineH > lineHpart * 1) {
      $("#animation").attr("src", "http://i.imgur.com/g9zK1Sg.png");
    }
    if (lineH < lineHpart) {
      $("#animation").attr("src", "http://i.imgur.com/eBDzgx8.png");
    }
  });

  $("#genPDF").on("click", function() {
    console.log("clicked");
    createPDF();
  });
});

function createPDF() {
  window.print();
}
