let result = JSON.parse(localStorage.getItem('result')) || '';
    document.querySelector(".js-result").innerHTML = `${result}`;

    function display(digit)
    {
      result += digit;
      document.querySelector(".js-result").innerHTML = `${result}`;
      localStorage.setItem('result',JSON.stringify(result));
    }

    function reset()
    {
      result = '';
      document.querySelector(".js-result").innerHTML = `${result}`;
      localStorage.setItem('result',JSON.stringify(result));
    }