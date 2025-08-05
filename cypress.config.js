const { defineConfig } = require("cypress")
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    env: {
      usuario_admin: process.env.EMAIL_ADMIN,
      senha_admin: process.env.SENHA_ADMIN,
    },
  },
})
