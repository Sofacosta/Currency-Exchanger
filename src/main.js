import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './CurrencyService.js'

function clearFields() {
  $('.showErrors').text("");
}

$(function() {
  $('#currencyExchange').on('click', function() {  
    const amountInUSD = $('#currency').val();
    const selectedCurrency = $('#currency-select').val();
    
    let promise = CurrencyService.getCurrency();
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showCurrency').text(`$${amountInUSD} dollars in ${selectedCurrency} is ${amountInUSD * body.conversion_rates[selectedCurrency]} ${selectedCurrency}.`); 

    }, function(error) {
      $('.showErrors').text(`There was an error processing yout request: ${error}`);

    });
  });
});
