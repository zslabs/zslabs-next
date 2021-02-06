import * as React from 'react'

interface CheckboxProps {
  className?: string
  label: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...rest }, ref) => {
    return (
      <div className={className}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="inline-grid items-center auto-cols-auto grid-flow-col justify-start gap-2">
          <input
            ref={ref}
            type="checkbox"
            className="rounded border-2 border-gray-300 h-5 w-5"
            {...rest}
          />
          <span>{label}</span>
        </label>
      </div>
    )
  }
)

export default Checkbox
