import React, { useMemo } from 'react';
import './AdminTable.css';

const AdminTable = ({ data, showCheckBox }) => {
  const header = useMemo(() => Object.keys(data[0]), [data]);
  return (
    <table className="table">
      <tr className="header">
        {showCheckBox && <th aria-label="Select all"><input type="checkbox" /></th>}
        {header.map((item) => <th>{item.toUpperCase()}</th>)}
      </tr>
      {data.map((row) => (
        <tr className="row">
          {showCheckBox && <td><input type="checkbox" /></td>}
          {header.map((item) => <td>{JSON.stringify(row[item])}</td>)}
        </tr>
      ))}
    </table>
  );
};
export default AdminTable;
