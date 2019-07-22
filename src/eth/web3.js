import Web3 from 'web3'

let web3;
if (typeof window.web3 !== 'undefined') web3 = new Web3(window.web3.currentProvider)
else {
  alert('MetaMask 설치가 필요합니다')
  window.location.href = 'https://metamask.io/'
}
// const web3 = (typeof window.web3 !== undefined) ? new Web3(window.web3.currentProvider) : window.location.href = 'https://metamask.io/'
export default web3
