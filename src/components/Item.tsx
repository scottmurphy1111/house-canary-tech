import React, { forwardRef, useEffect, useState } from 'react'

const Item = ({zip, handleClickItem, selectedZips}: any, ref: any) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if(selectedZips.includes(zip)) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [zip, selectedZips])
  return (
    <li ref={ref} key={zip} onClick={() => handleClickItem(zip, ref)}>{zip} {selected ? '👍' : ''}</li>
  )
}

export default forwardRef(Item)