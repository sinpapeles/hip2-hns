const { fetchAddress, setServers } = require('hip2-dane');
const Address = require('hsd/lib/primitives/address');

const isValidAddress = (address) => {
  try {
    return Address.fromString(address).isValid();
  } catch (e) {
    return false;
  }
};

const isValidInput = (str) => !isValidAddress(str);
const isValidOutput = (str) => isValidAddress(str);

/**
 *
 * @param {string} name - The domain name to retrieve the HNS address
 * @param {Object} options
 * @param {string[]} [options.dns] - Array of DNS servers to use
 * @param {boolean} [options.strict=true] - If true, will throw an error if the domain name is a valid address. If false, it returns the domain as an address.
 * @returns {Promise<string>} A valid HNS address
 */
module.exports = async (name, options = {}) => {
  if (options.dns) {
    setServers(options.dns);
  }

  if (!isValidInput(name)) {
    if (options.strict === false) {
      return name;
    }
    throw new Error(`"${name}" is a valid address and can't be used as HIP2`);
  }

  const output = await fetchAddress(name, 'HNS');

  if (!isValidOutput(output)) {
    throw new Error(`Response is not a valid address: ${output}`);
  }

  return output;
};
