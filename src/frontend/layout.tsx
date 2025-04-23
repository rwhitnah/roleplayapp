import type { FC } from 'hono/jsx'
import { Head } from './head.js'
import { Navbar } from './navbar.js'
import { Footer } from './footer.js'

export const Layout: FC = (props) => {
  return (
    <html class="bg-secondary">
      <Head/>
      <Navbar/>
      <body>{props.children}</body>
      <Footer/>

      <script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
    </html>
  )
}