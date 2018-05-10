

function testModule() {
  let string = Math.random().toString(36).substring(7);
  return "i generate random string" + string
}

module.exports = testModule;
