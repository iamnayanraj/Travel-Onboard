const NodeCache = require("node-cache");
const cache = new NodeCache();

const isPresentInCache = (key) => {
  if (cache.has(key)) return true;
  return false;
};

const getDataFromCache = (key) => {
  return cache.get(key);
};

const setDataToCache = (key, value) => {
  cache.set(key, value);
};

const getStats = () => {
  return cache.getStats();
};

module.exports = {
  isPresentInCache,
  getDataFromCache,
  setDataToCache,
  getStats,
};
