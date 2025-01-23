import React, { useEffect, useState } from 'react'

function Heading({ value, giveColor }) {
  const [color, setColor] = useState();
  useEffect(() => {
    if (giveColor === "black") {
      setColor("text-neutral-900")
    }
    if (giveColor === "white") {
      setColor("text-neutral-100")
    }
  })
  return (
    <h1 className={`text-5xl font-[oswald] font-bold uppercase ${color} mt-10`}>{value}</h1>
  )
}

export default Heading
