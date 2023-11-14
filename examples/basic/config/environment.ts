export const development = {
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        ignore: 'pid,hostname',
      },
    },
  },
}

export const production = {
  logger: true,
}

export const test = {
  logger: false,
}

export default {
  development,
  production,
  test,
}
