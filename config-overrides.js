const {
  override,
  addWebpackAlias,
  // eslint-disable-next-line import/no-extraneous-dependencies
} = require('customize-cra');

module.exports = override(addWebpackAlias({}));
