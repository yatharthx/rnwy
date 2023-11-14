import { Application } from './rnwy'

function handleKillSignal(signal: string) {
  console.log(`\nShutting the server down.`)
  process.exit(0)
}

export function boot<T extends Application>(App: new () => T): void {
  const app = new App()
  app.run()

  // register signal handlers
  process.on('SIGINT', handleKillSignal)
  process.on('SIGTERM', handleKillSignal)
}
