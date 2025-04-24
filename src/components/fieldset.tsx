import clsx from 'clsx'

export function Fieldset({
  className,
  ...props
}: { className?: string } & any) {
  return (
    <fieldset
      {...props}
      className={clsx(className, '*:data-[slot=text]:mt-1 [&>*+[data-slot=control]]:mt-6')}
    />
  )
}

export function Legend({
  className,
  ...props
}: { className?: string } & any) {
  return (
    <legend
      data-slot="legend"
      {...props}
      className={clsx(
        className,
        'text-base/6 font-semibold text-zinc-950 data-disabled:opacity-50 sm:text-sm/6 dark:text-white'
      )}
    />
  )
}

export function FieldGroup({ className, ...props }: any) {
  return <div data-slot="control" {...props} className={clsx(className, 'space-y-8')} />
}

export function Field({ className, ...props }: { className?: string } & any) {
  return (
    <field
      {...props}
      className={clsx(
        className,
        '[&>[data-slot=label]+[data-slot=control]]:mt-3',
        '[&>[data-slot=label]+[data-slot=description]]:mt-1',
        '[&>[data-slot=description]+[data-slot=control]]:mt-3',
        '[&>[data-slot=control]+[data-slot=description]]:mt-3',
        '[&>[data-slot=control]+[data-slot=error]]:mt-3',
        '*:data-[slot=label]:font-medium'
      )}
    />
  )
}

export function Label({ className, ...props }: { className?: string } & any) {
  return (
    <label
      data-slot="label"
      {...props}
      className={clsx(
        className,
        'text-base/6 text-zinc-950 select-none data-disabled:opacity-50 sm:text-sm/6 dark:text-white'
      )}
    />
  )
}

export function Description({
  className,
  ...props
}: { className?: string } & any) {
  return (
    <description
      data-slot="description"
      {...props}
      className={clsx(className, 'text-base/6 text-zinc-500 data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400')}
    />
  )
}

export function ErrorMessage({
  className,
  ...props
}: { className?: string } & any) {
  return (
    <description
      data-slot="error"
      {...props}
      className={clsx(className, 'text-base/6 text-red-600 data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500')}
    />
  )
}
