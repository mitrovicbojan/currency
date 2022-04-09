const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=100&from=GBP&to=EUR`)
  .then(resp => resp.json())
  .then((data) => {
    alert(`100 GBP = ${data.rates.EUR} EUR`);
  });