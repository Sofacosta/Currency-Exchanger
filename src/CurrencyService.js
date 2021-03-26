export default class CurrencyService {
  static getCurrency() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = 'https://v6.exchangerate-api.com/v6/31bbe4d014c7047776584a36/latest/USD';
      
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        } 
      }
      request.open('GET', url, true);
      request.send();
    });
  }
}
