import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './CurrencyService.js';

function clearFields() {
  $('.showCurrency').text('');
  $('.showErrors').text('');
}

$(function() {
  $('#currencyExchange').on('click', function() {  
    const amountInUSD = $('#currency').val();
    const selectedCurrency = $('#currency-select').val();
    let isError = false;

    if (selectedCurrency === 'ERROR') {
      isError = true;
    }

    let promise = CurrencyService.getCurrency(isError);
    promise.then(function(response) {
      const body = JSON.parse(response);
      clearFields();
      $('.showCurrency').text(`$${amountInUSD} dollars in ${selectedCurrency} is ${amountInUSD * body.conversion_rates[selectedCurrency]} ${selectedCurrency}.`);
    }).catch(function(error) {
      clearFields();
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
