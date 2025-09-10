module.exports = {
  apps : [{
    name   : "epoxy_backend",
    script : "server.js",
    cwd    : "/home/prestige/epoxy-main/backend",
    env    : {
      NODE_ENV: "development",
      PORT: "4000",
      DB_HOST: "127.0.0.1",
      DB_PORT: "3306",
      DB_USER: "root",
      DB_PASSWORD: "05RdKuZpjSSzevGM",
      DB_NAME: "epoxy_db",
      EMAIL_HOST: "smtp.ionos.com",
      EMAIL_PORT: "587",
      EMAIL_USER: "contact@prestigeepoxy.ca",
      EMAIL_PASSWORD: "@Prestige2025",
      EMAIL_TO: "contact@prestigeepoxy.ca",
      NOREPLY_EMAIL: "no-reply@prestigeepoxy.ca",
      VITE_API_BASE_URL: "localhost:4000/"
    },
    env_production : {
      NODE_ENV: "production",
      PORT: "4000",
      DB_HOST: "127.0.0.1",
      DB_PORT: "3306",
      DB_USER: "root",
      DB_PASSWORD: "05RdKuZpjSSzevGM",
      DB_NAME: "epoxy_db",
      EMAIL_HOST: "smtp.ionos.com",
      EMAIL_PORT: "587",
      EMAIL_USER: "contact@prestigeepoxy.ca",
      EMAIL_PASSWORD: "@Prestige2025",
      EMAIL_TO: "contact@prestigeepoxy.ca",
      NOREPLY_EMAIL: "no-reply@prestigeepoxy.ca",
      VITE_API_BASE_URL: "localhost:4000/"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
};
