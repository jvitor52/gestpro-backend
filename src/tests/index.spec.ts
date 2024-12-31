/**
 * @jest-environment ./prisma/custom_environment_jest
 */

import { execSync } from 'child_process';

beforeAll(() => {
  console.log('Seeding database for tests...');
  execSync('npm run prisma:seed', { stdio: 'inherit' });
});

import './integration/user';
