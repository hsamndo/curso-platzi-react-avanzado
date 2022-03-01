import React from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'
import { useCategoriesData } from '../../hooks/useCategoriesData'
import { useShowFixed } from '../../hooks/useShowFixed'

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed] = useShowFixed();

  const renderList = (fixed = false) => (
    <List fixed={fixed}>
      {
        loading
          ? (<Item key='loading'><Category /></Item>)
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
