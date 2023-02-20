
const Token = artifacts.require('@openzeppelin/contracts/ERC20PresetMinterPauser');

module.exports = function(deployer) {
  deployer.deploy(Token, 'NaniSwap Token', 'NANI');
};