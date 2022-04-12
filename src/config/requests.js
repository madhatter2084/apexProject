const API_KEY = "dN5M7fBTN7FCyZEWNlNj";

const requests = {
  fetchPlayerData: `bridge?version=5platform=X1&uid=2533274822432607,2533274822699086,2533274801588489&auth=${API_KEY}`,
  fetchMapData: `maprotation?version=5&auth=${API_KEY}`,
  fetchNews: `news?version=5lang=en-us&auth=${API_KEY}`,
  fetchCraftingRotation: `crafting?version=5&auth=${API_KEY}`,
  fetchServerStatus: `servers?version=5auth=${API_KEY}`,
  fetchShop: `store?&auth=${API_KEY}`,
};

export default requests;
