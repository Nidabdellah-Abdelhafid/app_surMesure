const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'mysql');

  const connections = {
    mysql: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'bg4wqz5t9lw09mcqargp-mysql.services.clever-cloud.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'bg4wqz5t9lw09mcqargp'),
        user: env('DATABASE_USERNAME', 'uekuszyyi4t1r7hb'),
        password: env('DATABASE_PASSWORD', '5Relzcq5qMoKv3iuBYSR'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: {
        min: 0,
        max: 5,
        acquireTimeoutMillis: 30000, // 30 seconds
        createTimeoutMillis: 30000, // 30 seconds
        idleTimeoutMillis: 30000,   // 30 seconds
        reapIntervalMillis: 1000,   // 1 second
        createRetryIntervalMillis: 200 // 200 ms
      },
    },
    mysql2: {
      connection: {
        host: env('DATABASE_HOST', 'bg4wqz5t9lw09mcqargp-mysql.services.clever-cloud.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'bg4wqz5t9lw09mcqargp'),
        user: env('DATABASE_USERNAME', 'uekuszyyi4t1r7hb'),
        password: env('DATABASE_PASSWORD', '5Relzcq5qMoKv3iuBYSR'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      pool: {
        min: 0,
        max: 5,
        acquireTimeoutMillis: 30000, // 30 seconds
        createTimeoutMillis: 30000, // 30 seconds
        idleTimeoutMillis: 30000,   // 30 seconds
        reapIntervalMillis: 1000,   // 1 second
        createRetryIntervalMillis: 200 // 200 ms
      },
    },
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: {
        min: 0,
        max: 10,
        acquireTimeoutMillis: 30000, // 30 seconds
        createTimeoutMillis: 30000, // 30 seconds
        idleTimeoutMillis: 30000,   // 30 seconds
        reapIntervalMillis: 1000,   // 1 second
        createRetryIntervalMillis: 200 // 200 ms
      },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000), // 60 seconds
    },
  };
};
