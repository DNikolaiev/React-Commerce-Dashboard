import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

export default class Orders extends React.Component {
  constructor() {
      super(...arguments);
      this.toolbar = ['ExcelExport' ,'PdfExport'];
      this.toolbarClick = (args) => {
          if (this.grid && args.item.id === 'grid_excelexport') {
              this.grid.excelExport();
          }
          if (this.grid && args.item.id === 'grid_pdfexport') {
            this.grid.pdfExport();
          }
      };
  }
  render(){
    return (
          <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Management" title="Orders" />
            <GridComponent  toolbarClick={this.toolbarClick} ref={g => this.grid = g} toolbar={this.toolbar} id="grid" dataSource={ordersData} allowPaging allowSorting allowExcelExport="true" allowPdfExport allowFiltering>
              <ColumnsDirective>
                {ordersGrid.map((item, index) => (
                  <ColumnDirective key={index} {...item} />
                ))}
              </ColumnsDirective>
              <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Toolbar]} />
            </GridComponent>
          </div>
        )
  }
}

// const Orders = () => {
//   this.toolbarClick = this.toolbarClick.bind(this);
//   return (
//     <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
//       <Header category="Page" title="Orders" />
//       <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting allowExcelExport="true" allowPdfExport allowFiltering>
//         <ColumnsDirective>
//           {ordersGrid.map((item, index) => (
//             <ColumnDirective key={index} {...item} />
//           ))}
//         </ColumnsDirective>
//         <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
//       </GridComponent>
//     </div>
//   )
// }

// export default Orders