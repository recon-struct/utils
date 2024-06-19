/**
 * Checks if the current system is little endian.
 * @returns True if the system is little endian, false otherwise.
 */
const getIsLittleEndian = () =>
  new Uint8Array(new Uint16Array([0x1234]).buffer)[0] === 0x34

export default getIsLittleEndian
