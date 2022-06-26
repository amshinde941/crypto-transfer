//https://eth-goerli.alchemyapi.io/v2/LtFXbabyCl2Y9eJd2G4Xvwm0YTXVNv69

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/LtFXbabyCl2Y9eJd2G4Xvwm0YTXVNv69",
      accounts: [ 'e3795247e91755febbc749628e0f8520d36710ce5085cec17adf29a1e27908a6' ]
    }
  }
}
