import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import '../component/styles.css';
import { useState } from 'react';

export default function BasicTable({ data, columns }) {

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    })

    return (
        <>
            <section className='mainSection'>
                <div className='overlay'>
                    <div className='TableCOntainer container'>
                        <div className='col-8 col-sm-8 col-md-8 col-lg-10 col-xl-10'>
                            <div className='inputContainer'>
                                <input
                                    placeholder='Search Your Movie'
                                    type='text'
                                    value={filtering}
                                    onChange={e => setFiltering(e.target.value)}
                                />
                            </div>
                            <table className='tableMainCOntainer col-8 col-sm-8 col-md-8 col-lg-12 col-xl-12'>
                                <thead className='titleHead'>
                                    {table.getHeaderGroups().map(headerGroup => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map(header => (
                                                <th className='listHead'
                                                    key={header.id}
                                                    onClick={header.column.getToggleSortingHandler()}
                                                >
                                                    {header.isPlaceholder ? null : (
                                                        <div>
                                                            {flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )}
                                                            {
                                                                { asc: '🔼', desc: '🔽' }[
                                                                header.column.getIsSorted() ?? null
                                                                ]
                                                            }
                                                        </div>
                                                    )}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody className='columnHead'>
                                    {table.getRowModel().rows.map(row => (
                                        <tr key={row.id}>
                                            {row.getVisibleCells().map(cell => (
                                                <td className='movieList' key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                                
                            </table>
                            <div className='movieBtnContainer col-6 col-sm-6 col-md-6 col-lg-10 col-xl-10'>
                                    <button className='movieBtn' onClick={() => table.setPageIndex(0)}>First page</button>
                                    <button className='movieBtn'
                                        disabled={!table.getCanPreviousPage()}
                                        onClick={() => table.previousPage()}
                                    >
                                        Previous page
                                    </button>
                                    <button className='movieBtn'
                                        disabled={!table.getCanNextPage()}
                                        onClick={() => table.nextPage()}
                                    >
                                        Next page
                                    </button>
                                    <button className='movieBtn' onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                                        Last page
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
