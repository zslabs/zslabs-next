import * as React from 'react'

interface RadioProps {
  className?: string
  label: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...rest }, ref) => {
    return (
      <div className={className}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="inline-grid items-center auto-cols-auto grid-flow-col justify-start gap-2">
          <input
            ref={ref}
            type="radio"
            className="border-2 border-gray-300 h-5 w-5"
            {...rest}
          />
          <span>{label}</span>
        </label>
      </div>
    )
  }
)

export default Radio
