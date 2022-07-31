import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Filter, Edit, Resize, Sort, Toolbar, Page, Search, Inject } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'
const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Management" title="Customers" />
      <GridComponent  id="grid_employees" dataSource={customersData} allowPaging allowSorting toolbar={['Add','Edit', 'Delete', 'Cancel']} editSettings={{allowDeleting:true, allowEditing:true, allowAdding:true}}>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Edit, Filter, Selection, Sort, Search, Page, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Customers