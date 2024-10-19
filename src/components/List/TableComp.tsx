import {  useState, useMemo, useEffect } from "react";
import { useTable, Column } from "react-table";
import { fetchDevices } from './deviceService';

// Define the data structure for your table rows
export interface DeviceData {
  id: number;
  device_name: string;
  ip: string;
  env: string;
}

// Define the columns using the Column type from react-table
const COLUMNS: Column<DeviceData>[] = [
  {
    Header: 'ID',
    accessor: 'id', // accessor is the key in the data object
  },
  {
    Header: 'Name',
    accessor: 'device_name',
  },
  {
    Header: 'IP',
    accessor: 'ip',
  },
  {
    Header: 'ENV',
    accessor: 'env',
  },
  {
    Header: 'EDIT/DELETE',
    Cell: ({ row }) => (
      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600" onClick={() => console.log("Edit row: ", row.values)}>Edit</button>
        <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600" onClick={() => console.log("Delete row: ", row.values)}>Delete</button>
      </div>
    ),
  },
];

export const TableComponent = () => {
  const [data, setData] = useState<DeviceData[]>([]);
  
  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const devices = await fetchDevices();
        setData(devices);
      } catch (error) {
        console.error("Failed to fetch devices:", error);
      }
    };

    fetchData();
  }, []);
  // Use useMemo to memoize the columns and data
  const columns = useMemo(() => COLUMNS, []);

  // Create a table instance using the useTable hook
  const tableInstance = useTable({
    columns,
    data,
  });

  // Destructure the tableInstance to get required props and methods
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full table-auto border-collapse">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index} className="bg-gray-200">
              {headerGroup.headers.map((column, colIndex) => (
                <th
                  {...column.getHeaderProps()}
                  key={colIndex}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={rowIndex} className="hover:bg-gray-100">
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-b"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;