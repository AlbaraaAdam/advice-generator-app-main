$.getJSON("https://api.adviceslip.com/advice", function (data) {
    var num = data.slip.id;
    var advice = data.slip.advice;

    $(".advice-num").append(num);
    $(".advice").append(advice);
  });