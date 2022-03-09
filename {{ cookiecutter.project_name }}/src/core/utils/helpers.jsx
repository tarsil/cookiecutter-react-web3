import Web3 from "web3"

export const hexToDecimal = (value) => {
  return parseInt(value, 16)
}

export const valueToHex = (value) => {
  return value.toString(16)
}

export const getNetworkAsset = (value) => {
  let asset = null

  if (isNaN(value)) {
    return "ETH"
  }

  const networks = [
    { id: 1, coin: "ETH" },
    { id: 56, coin: "BNB" },
    { id: 137, coin: "MATIC" },
  ]

  networks.forEach((network) => {
    if (network.id === value) {
      asset = network.coin
    }
  })

  if (asset === "" || asset === null || asset === undefined) {
    asset = "ETH"
  }

  return asset
}
