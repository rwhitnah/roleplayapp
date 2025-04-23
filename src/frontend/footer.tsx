import type { FC } from 'hono/jsx'

export const Footer: FC = (props) => {
  return (
    <footer class="footer p-5 bg-secondary text-xs md:text-base-content items-center flex flex-row">
      <aside class="w-3/4">
        <p>Alliance is copyright BFM Live Action Entertainment, LLC 2025. All Rights Reserved</p>
      </aside>
    </footer>
  )
}
