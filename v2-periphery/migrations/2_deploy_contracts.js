const UniswapV2Router02 = artifacts.require("UniswapV2Router02");
const WETH = artifacts.require("WETH9");
module.exports = async function(deployer) {
    const FACTORY_ADDRESS = "0x7362618C262E70DD89E2f6145662908c2a6e2dDa";
    // await deployer.deploy(WETH);     
    // const weth = await WETH.deployed();

    const weth = "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000" // bit token
    await deployer.deploy(UniswapV2Router02, FACTORY_ADDRESS, weth);
}
