import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './table.scss';

export default class Table extends Component {
    render() {
        return (
            <div className="table">
                <ReactTable 
                    data={data} 
                    columns={columns}
                    loading={false}
                    showPagination={true}
                    showPaginationTop={true}
                    showPaginationBottom={false}
                    showPageSizeOptions={true}
                    pageSizeOptions={[5, 10, 20, 25, 50, 100]}
                    defaultPageSize={10}
                    
                    // Textos 
                    previousText='Anterior'
                    nextText='Siguiente'
                    loadingText='Cargando...'
                    noDataText='Filas no encontradas'
                    pageText='Página'
                    ofText='de'
                    rowsText='Filas'

                    pivotDefaults={{}}

  
                    minRows={undefined}
                    showPageJump={false}
                    collapseOnSortingChange={true}
                    collapseOnPageChange={true}
                    collapseOnDataChange={true}
                    freezeWhenExpanded={false}
                    sortable={true}
                    resizable={true}
                    filterable={false}
                    defaultSortDesc={false}
                    defaultSorted={[]}
                    defaultFiltered={[]}
                    defaultResized={[]}
                    defaultExpanded={{}}
                    
                />
            </div>
        );
    }
}

const data = [
    { url: 'asdasd', method: 'post', status: 200, size: 789, time: 654 },
    { url: 'asdasd', method: 'post', status: 201, size: 789, time: 654 },
    { url: 'asdasd', method: 'post', status: 202, size: 789, time: 654 },
    { url: 'asdasd', method: 'post', status: 203, size: 789, time: 654 },
    { url: 'asdasd', method: 'post', status: 204, size: 789, time: 654 },
    { url: 'asdasd', method: 'post', status: 205, size: 789, time: 654 },
    { url: 'asdasd', method: 'post', status: 206, size: 789, time: 654 },
    { url: 'asdasd', method: 'post', status: 207, size: 789, time: 654 },
    { url: 'asdasd', method: 'post', status: 208, size: 789, time: 654 },
];

const columns = [
    { Header: 'Url', accessor: 'url', Aggregated: 2, Footer: 'Soy un footer' },
    { Header: 'Method', accessor: 'method' },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Size', accessor: 'size' },
    { Header: 'Time', accessor: 'time' },
];
