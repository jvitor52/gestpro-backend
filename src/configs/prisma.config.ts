import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import moment from 'moment';
import * as path from 'path';

const prisma = new PrismaClient({
  errorFormat: 'minimal',
  log: [
    {
      emit: 'event',
      level: 'query',
    },
  ],
});

prisma.$on('query', (e) => {
  if (process.env.DEBUG_QUERIES == 'false') return;

  const logFileStream = buildLogFileStream();
  const logMessage = `[${moment().toISOString()}]: 
Query: ${e.query}
Bindings: ${e.params}
Duration: ${e.duration}
`;
  logFileStream.write(logMessage);
});

function buildLogFileStream() {
  const logFolderPath = path.join(__dirname, '..', '..', 'storage', 'logs');

  // formato do nome de arquivo do log: yyyy-mm-dd-query.log
  const logFilePath = path.join(
    logFolderPath,
    moment().toISOString().slice(0, 10) + '-query.log'
  );

  if (!fs.existsSync(logFolderPath)) {
    fs.mkdirSync(logFolderPath, { recursive: true });
  }

  if (!fs.existsSync(logFilePath)) {
    fs.writeFileSync(logFilePath, ''); // Create an empty log file
  }
  const logFileStream = fs.createWriteStream(logFilePath, { flags: 'a' });
  return logFileStream;
}

export default prisma;
