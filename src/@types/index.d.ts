/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';

console.log(express.name);

declare global {
  namespace Express {
    interface Request {
      uid: string;
      uid_keycloak: string | null;
      email: string | null;
      status: string;
    }
  }
}
