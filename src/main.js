import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(function() {
  $('#currencyExchange').on('click', function() {
    console.log("this is to get mbfkjsdfh");
    const amountInUSD = $('#currency').val();
    const selectedCurrency = $('#currency-select').val();
    // $('#currency').val('');

    let request = new XMLHttpRequest();
    const url = 'https://v6.exchangerate-api.com/v6/31bbe4d014c7047776584a36/latest/USD';

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open('GET', url, true);
    request.send();

    function getElements(response) {
      $('.showCurrency').text(`The exchange rate in USD ${amountInUSD} is ${response.conversion_rates[selectedCurrency]}`);
      console.log(`The exchange rate in USD ${amountInUSD} is ${response.conversion_rates[selectedCurrency]}`);
    }
  });
});
