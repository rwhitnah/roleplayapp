import type { FC } from 'hono/jsx'

export const Head: FC = (props) => {
  return (
    <head>
      <title>Roleplay.app</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link href="output.css" rel="stylesheet" />
    </head>
  )
}