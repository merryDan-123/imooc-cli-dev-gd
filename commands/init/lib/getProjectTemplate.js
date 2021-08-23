const request = require('@imooc-cli-dev-gd/request');

module.exports = function() {
  return request({
    url: '/project/template',
  });
};
