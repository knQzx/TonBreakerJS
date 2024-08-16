var awsCryptoImported = require("@aws-crypto/sha256-js");
var tonImported = require("@ton/core");

const ONCHAIN_CONTENT_PREFIX = 0x00
const SNAKE_PREFIX = 0x00
const CELL_MAX_SIZE_BYTES = Math.floor((1023 - 8) / 8)

const sha256 = str => {
  const sha = new awsCryptoImported.Sha256()
  sha.update(str)
  return Buffer.from(sha.digestSync())
}

const toKey = key => {
  return BigInt(`0x${sha256(key).toString("hex")}`)
}

export function buildOnchainMetadata(data) {
  let dict = tonImported.Dictionary.empty(
    tonImported.Dictionary.Keys.BigUint(256),
    tonImported.Dictionary.Values.Cell()
  )

  // Store the on-chain metadata in the dictionary
  Object.entries(data).forEach(([key, value]) => {
    dict.set(toKey(key), makeSnakeCell(Buffer.from(value, "utf8")))
  })

  return tonImported.beginCell()
    .storeInt(ONCHAIN_CONTENT_PREFIX, 8)
    .storeDict(dict)
    .endCell()
}

export function makeSnakeCell(data) {
  // Create a cell that package the data
  let chunks = bufferToChunks(data, CELL_MAX_SIZE_BYTES)

  const b = chunks.reduceRight((curCell, chunk, index) => {
    if (index === 0) {
      curCell.storeInt(SNAKE_PREFIX, 8)
    }
    curCell.storeBuffer(chunk)
    if (index > 0) {
      const cell = curCell.endCell()
      return tonImported.beginCell().storeRef(cell)
    } else {
      return curCell
    }
  }, tonImported.beginCell())
  return b.endCell()
}

function bufferToChunks(buff, chunkSize) {
  let chunks = []
  while (buff.byteLength > 0) {
    chunks.push(buff.slice(0, chunkSize))
    buff = buff.slice(chunkSize)
  }
  return chunks
}
