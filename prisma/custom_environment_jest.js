const NodeEnvironment = require('jest-environment-node').TestEnvironment;
const { execSync } = require('child_process');
const { resolve } = require('path');
const { Client } = require('pg');
const dotenv = require("dotenv");

const prismaCli = 'npx prisma'; // WINDOWS

// const prismaCli = "./node_modules/.bin/prisma" // LINUX/MAC

dotenv.config({
  path: resolve(__dirname, '..', '.env.test')
});

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.schema = `algorithm_sgp_test_${Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000)}`;
    this.connectionString = `${process.env.DATABASE_URL}&schema=${this.schema}`;
  }  

  async setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;

    execSync(`${prismaCli} migrate dev`);
    execSync(`${prismaCli} db seed`);
  }

  async teardown() {
    const client = new Client({
      connectionString: this.connectionString
    });

    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);
    await client.end();
  }
}

module.exports = CustomEnvironment;
