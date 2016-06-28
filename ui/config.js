class Config {
  constructor(options = {}) {
    this.baseApi = options.baseApi || '/api/v1'
    this.defaultHeaders = {
      'Content-Type': 'application/json'
    }
    this.defaultFetchConfig = {
      method: 'GET',
      headers: this.defaultHeaders
    }
  }

  api(path) {
    return `${this.baseApi}${path}`
  }

  get token() {
    return localStorage.getItem('token')
  }

  headers(overrides = {}) {
    return Object.assign({}, this.defaultHeaders, overrides);
  }

  fetchConfig(overrides = {}) {
    let configs = {};
    if (localStorage.getItem('token')) {
      let authHeader = `Bearer ${localStorage.getItem('token')}`;
      configs.headers = this.headers({ 'Authorization': authHeader })
    }
    return Object.assign({}, this.defaultFetchConfig, configs, overrides)
  }
}

const CONFIG = new Config();
export default CONFIG;
