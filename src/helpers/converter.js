import { BigNumber } from "ethers"

export const convertBigNumberToNumber = (bigNumber) => {
  return BigNumber.from(bigNumber).toNumber();
}