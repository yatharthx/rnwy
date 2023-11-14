import { FastifyServerOptions } from 'fastify'

export type RnwyAppConf = {
  environment: 'development' | 'production' | 'test'
  fastify: FastifyServerOptions
}
