import type { FC } from 'hono/jsx'
import { Head } from './head.js'
import { Navigation } from './navbar.js'
import { Footer } from './footer.js'

export const Layout: FC = (props) => {
  return (
    <html class="bg-secondary">
      <Head/>
      <body>
        <Navigation user={props.user}/>
        {props.children}</body>
      <Footer/>
    </html>
  )
}