export default class CurrencyService {
  static getCurrency(isError) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = '';

      if (isError) {
        url = `https://v6.exchangerate-api.com/v6/12345abcde/latest/USD`;
      } else {
        url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      }
      
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        } 
      };
      request.open('GET', url, true);
      request.send();
    });
  }
}
