/**
 * TODO: Update this component to use your client-side framework's link
 * component. We've provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */

export const Link = (
  props: { href: string } & any,
  ref: any
) => {
  return (
    <a {...props} ref={ref} />
  )
}
