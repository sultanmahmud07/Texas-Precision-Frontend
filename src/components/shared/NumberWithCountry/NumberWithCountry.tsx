"use client"

import React from "react"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"   // default styles
// import "flagpack/dist/flagpack.css"           // flags

type Props = {
      value: string | undefined
      onChange: (value?: string) => void  
      label?: string
      required?: boolean
      className?: string
}


const NumberWithCountry: React.FC<Props> = ({
      value,
      onChange,
      label = "Contact Number",
      required = true,
      className = "",
}) => {
      return (
            <div className={className}>
                  <label className="number-label block text-sm md:text-base py-1 font-medium text-black mb-1">
                        {label}
                  </label>
                  <PhoneInput
                        international
                        defaultCountry="AU"   // ← Australia
                        value={value}
                        onChange={onChange}
                        required={required}
                        className="phone-input-custom"
                  />

            </div>
      )
}

export default NumberWithCountry
