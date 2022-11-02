import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo(props => {
  const [selectItems, setSelectItems] = useState([])
  const itemClickHandle = item => {
    const newItems = [...selectItems]
    let index = newItems.indexOf(item)
    console.log(index)
    if (index >= 0) {
      newItems.splice(index, 1)
    } else {
      newItems.push(item)
    }
    setSelectItems(newItems)
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map(item => {
          return (
            <div
              className={classNames('item', { active: selectItems.includes(item) })}
              onClick={e => itemClickHandle(item)}
              key={item}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter
