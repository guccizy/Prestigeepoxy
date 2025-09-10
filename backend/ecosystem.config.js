module.exports = {
  apps : [{
    name   : "epoxy_backend",
    script : "server.js",
    cwd    : "/home/prestige/epoxy-main/backend",
    env    : {
      NODE_ENV: "development"
    },
    env_production : {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    },
    // Env file to be loaded
    env_file : ".env"
  }]
};
