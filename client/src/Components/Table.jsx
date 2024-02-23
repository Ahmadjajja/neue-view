import React from 'react';
// import './styles.css'; // Import the CSS file

const tableStyles = {
  table: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    borderCollapse: 'collapse',
    width: '100%',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'left',
    backgroundColor: '#04AA6D',
    color: 'white',
  },
  evenRow: {
    backgroundColor: '#f2f2f2',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
};

const Table = ({ data }) => {
  return (
    <div style={{ height: "50vh", overflow: 'auto' }} >
      <table style={tableStyles.table}>
        <thead>
          <tr>
            <th key={0} style={tableStyles.th} className='text-center'>
              Action
            </th>
            {Object.keys(data[0]).map((header, index) => (
              <th key={index + 1} style={tableStyles.th} className='text-center'>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex % 2 === 0 ? tableStyles.evenRow : tableStyles.oddRow}>
              <td key={0} style={tableStyles.td}>
                <button className='btn btn-outline-primary'>Edit</button>
              </td>
              {Object.values(row).map((value, valueIndex) => (
                <td key={valueIndex + 1} style={tableStyles.td}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
