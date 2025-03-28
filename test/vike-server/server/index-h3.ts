import { createApp, createRouter, eventHandler } from 'h3'
import { apply } from 'vike-server/h3'
import { serve } from 'vike-server/h3/serve'
import { init } from '../database/todoItems'

async function startServer() {
  await init()
  const app = createApp()
  const port = process.env.PORT || 3000

  const router = createRouter()

  app.use(router)

  app.use(
    eventHandler((event) => {
      event.context.xRuntime = 'x-runtime'
      event.node.res.setHeader('x-test', 'test')
    })
  )

  apply(app, {
    pageContext(runtime) {
      return {
        xRuntime: runtime.h3.context.xRuntime
      }
    }
  })

  return serve(app, { port: +port })
}

export default startServer()
