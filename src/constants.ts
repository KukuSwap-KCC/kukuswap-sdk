import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  KCC = 321,
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 79377087078960,
  MOONBASE = 1287,
  AVALANCHE = 43114,
  FUJI = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const INIT_CODE_HASH: string = '0x388b7e687fd76bebb372401ab6ef832cda749b17dd5ea101caa8b1ad4ad9eff1'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.KCC]: '0x852ead547a013cc1e35ee41454af7a8d75a7b49d',
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '4',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '4',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.KCC]: '0x748e7a1d2d2566120787f7134588180bc591c22f',
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '4',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '4',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const KUKU_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.KCC]: '0xc0101cefa59c4a70b8692e34e66049388a312273',
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '4',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '4',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.KCC]: '',
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '4',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '4',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.KCC]: '',
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '4',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '4',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.KCC]: '',
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '4',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '4',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.KCC]: '',
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '4',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '4',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
