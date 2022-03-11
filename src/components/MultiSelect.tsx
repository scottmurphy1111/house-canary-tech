import React, { createRef, useEffect, useRef, useState } from 'react'
import Item from './Item'
import './MultiSelect.css'


interface MultiSelectProps {
  zips: string[]
}

const MultiSelect = ({zips}: MultiSelectProps) => {
  const [open, setOpen] = useState(false)
  const [selectedZips, setSelectedZips] = useState<string[]>([])
  const itemRefs = useRef([])

  itemRefs.current = zips.map((item, i) => itemRefs.current[i] ?? createRef())

  const handleOpen = () => {    
    setOpen(() => !open)
  }

  useEffect(() => {
    console.log(selectedZips)
  }, [selectedZips])

  const handleClickItem = (zip: string, ref: any) => {
    console.log(ref)
    if (!selectedZips.includes(zip)) {
      setSelectedZips(prev => [...prev, zip])

    } else {
      const newZips = selectedZips.filter(item => item !== zip)
      setSelectedZips(newZips)
    }
  }

  return (
    <div className="multi-select">
      <div className="multi-select-open" onClick={handleOpen}>Select Item(s)</div>
      <ul style={{display: open ? 'block' : 'none'}}>
        {zips.map((zip, i) => <Item ref={itemRefs.current[i]} zip={zip} key={zip} handleClickItem={handleClickItem} selectedZips={selectedZips} />)}
      </ul>
    </div>
  )
}

export default MultiSelect