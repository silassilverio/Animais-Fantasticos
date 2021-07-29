export default function initFetchBitcoin() {
  fetch('https://www.mercadobitcoin.com.br/api/BTC/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000 / bitcoin.ticker.sell).toFixed(4);
  }).catch(erro => {
    console.log(Error(erro));
  })
}