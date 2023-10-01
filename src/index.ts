import { exec } from 'child_process'

function openBrowser (url: string): void {
  let command

  if (process.platform === 'win32') {
    command = `start ${url}`
  } else if (process.platform === 'darwin') {
    command = `open ${url}`
  } else {
    command = `xdg-open ${url}`
  }

  exec(command, () => {
    console.log('My name Bun... Bun Bunny!')
  })
}

const server = Bun.serve({
  port: 3000,
  fetch () {
  }
})

openBrowser(`http://${server.hostname}:${server.port}`)
