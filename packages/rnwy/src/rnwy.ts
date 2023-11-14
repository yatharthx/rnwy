import Fastify, { FastifyInstance } from 'fastify'
import { RnwyAppConf } from './types'

export class Application {
  name = 'RNWY Application'
  version = '0.0.0'
  conf: RnwyAppConf = {
    environment: 'development',
    fastify: {},
  }
  server!: FastifyInstance

  constructor() {
    this.initialize()
  }

  configure(configurationFn: (conf: {}) => void) {
    configurationFn(this.conf)
  }

  initialize() {
    this.server = Fastify(this.conf.fastify)

    this.server.get('/', async () => {
      return {
        message: `Hello from ${this.name} v${this.version}!`,
      }
    })
  }

  run() {
    if (!this.server) {
      console.error('RNWY ERROR: Application not initialized')
      throw new Error('Application not initialized')
    }

    this.server.listen(
      {
        port: 3000,
        host: '0.0.0.0',
      },
      (err, address) => {
        if (err) throw err
        console.log(`server listening on ${address}`)
      },
    )
  }
}
