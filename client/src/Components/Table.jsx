import React from 'react';
import { useState } from 'react';
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

// const Table = ({ data }) => {
//   const [recordDetail, setRecordDetail] = useState({});
//   const [recordID, setRecordID] = useState("");

//   const handleClick = (row) => {
//     console.log("clicked row -> ", row)
//     setRecordDetail(row)
//     setRecordID(row.id)
//   }

//   return (
//     <div style={{ height: "50vh", overflow: 'auto' }} >
//       <table style={tableStyles.table}>
//         <thead>
//           <tr>
//             <th key={0} style={tableStyles.th} className='text-center'>
//               Action
//             </th>
//             {Object.keys(data[0]).map((header, index) => (
//               <th key={index + 1} style={tableStyles.th} className='text-center'>
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex} style={rowIndex % 2 === 0 ? tableStyles.evenRow : tableStyles.oddRow}>
//               <td key={0} style={tableStyles.td}>
//                 <button onClick={() => handleClick(row)} type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ textDecoration: "none" }}>Edit</button>
//               </td>
//               {Object.values(row).map((value, valueIndex) => (
//                 <td key={valueIndex + 1} style={tableStyles.td}>{value}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* <!-- Modal --> */}
//       <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="exampleModalLabel">Update Record</h1>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               ...
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-outline-primary">Update</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;


const Table = ({ data }) => {
  const [tableData, setTableData] = useState(data)
  const [recordDetail, setRecordDetail] = useState({});
  const [editedRecord, setEditedRecord] = useState({});
  const [recordID, setRecordID] = useState("");

  const handleClick = (row) => {
    setRecordDetail(row);
    setEditedRecord({ ...row }); // Copy the row data to editedRecord
    setRecordID(row.id);
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    // Check if the field being edited is not 'id'
    if (name !== 'id') {
      setEditedRecord(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  }

  const handleUpdate = () => {
    // Perform update action here, for example, update the original data array
    const updatedData = data.map(row => {
      console.log("row.id -> ", row);
      console.log("editedRecord.id -> ", editedRecord);
      if (row.ID === editedRecord.ID) {
        return editedRecord;
      }
      return row;
    });
    // Optionally, you can update state or perform any other actions needed
    console.log("Updated Data:", updatedData);
    setTableData(updatedData);
  }

  // return (
  //   <div style={{ height: "50vh", overflow: 'auto' }} >
  //     <table style={tableStyles.table}>
  //       <thead>
  //         <tr>
  //           <th key={0} style={tableStyles.th} className='text-center'>
  //             Action
  //           </th>
  //           {Object.keys(tableData[0]).map((header, index) => (
  //             <th key={index + 1} style={tableStyles.th} className='text-center'>
  //               {header}
  //             </th>
  //           ))}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {tableData.map((row, rowIndex) => (
  //           <tr key={rowIndex} style={rowIndex % 2 === 0 ? tableStyles.evenRow : tableStyles.oddRow}>
  //             <td key={0} style={tableStyles.td}>
  //               <button onClick={() => handleClick(row)} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ textDecoration: "none" }}>Edit</button>
  //             </td>
  //             {Object.keys(row).map((key, valueIndex) => (
  //               <td key={valueIndex + 1} style={tableStyles.td}>{row[key]}</td>
  //             ))}
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  //       <div className="modal-dialog">
  //         <div className="modal-content">
  //           <div className="modal-body">
  //             {/* Input fields for editing */}
  //             {Object.keys(recordDetail).map(key => (
  //               <div key={key} className="mb-3 d-flex justify-content-between">
  //                 <label htmlFor={key} className="form-label text-start">{key}</label>
  //                 <input type="text" className="form-control" style={{width: "65%"}} id={key} name={key} value={editedRecord[key] || ''} onChange={handleEditChange} />
  //               </div>
  //             ))}
  //           </div>
  //           <div className="modal-footer">
  //             <button type="button" className="btn btn-outline-primary"  data-bs-dismiss="modal">Cancel</button>
  //             <button type="button" className="btn btn-outline-primary" onClick={handleUpdate} data-bs-dismiss="modal">Update</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div style={{ height: "50vh", overflow: 'auto' }} >
      <table style={tableStyles.table}>
        <thead>
          <tr>
            <th key={0} style={tableStyles.th} className='text-center'>
              Action
            </th>
            {Object.keys(tableData[0]).map((header, index) => {
              // Check if the header is not 'id'
              if (header !== 'ID') {
                return (
                  <th key={index + 1} style={tableStyles.th} className='text-center'>
                    {header}
                  </th>
                );
              }
              return null;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex % 2 === 0 ? tableStyles.evenRow : tableStyles.oddRow}>
              <td key={0} style={tableStyles.td}>
                <button onClick={() => handleClick(row)} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ textDecoration: "none" }}>Edit</button>
              </td>
              {Object.keys(row).map((key, valueIndex) => {
                // Check if the key is not 'id'
                if (key !== 'ID') {
                  return (
                    <td key={valueIndex + 1} style={tableStyles.td}>{row[key]}</td>
                  );
                }
                return null;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {/* Input fields for editing */}
              {Object.keys(recordDetail).map(key => {
                // Check if the key is not 'id'
                if (key !== 'ID') {
                  return (
                    <div key={key} className="mb-3 d-flex justify-content-between">
                      <label htmlFor={key} className="form-label text-start">{key}</label>
                      <input type="text" className="form-control" style={{width: "65%"}} id={key} name={key} value={editedRecord[key] || ''} onChange={handleEditChange} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary"  data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-outline-primary" onClick={handleUpdate} data-bs-dismiss="modal">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;