/**
 * Checks if the system is using big-endian byte order.
 * @returns True if the system is big-endian, false otherwise.
 */
const getIsBigEndian = () =>
  new Uint8Array(new Uint16Array([0x1234]).buffer)[0] === 0x12

export default getIsBigEndian
