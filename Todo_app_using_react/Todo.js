import React, { useState } from "react";
import './Todo.css'

const Tododata = {
  index: -1,
  data: "",
};

const Test = () => {
  const [group, setGroup] = useState([]);
  const [tempStudent, setTempStudent] = useState(Tododata);


  

  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
   
  }
};
  return (
    <div>
      <h1>TODO LIST APPLICATION</h1>
      <div className="container">
       
        <input
        placeholder="Enter Todo Data..."
          value={tempStudent.data}
          onChange={(e) =>
            setTempStudent({ ...tempStudent, data: e.target.value })
          }
          onKeyPress={handleKeypress}
        
        />
       
        <button
          onClick={() => {
            if (tempStudent.index === -1) {
              let tempStudentIndex = group.length;
              setGroup([...group, { ...tempStudent, index: tempStudentIndex }]);
              setTempStudent(Tododata);
            } else {
              let tempGroup = [...group].map((list) => {
                if (list.index === tempStudent.index) {
                  return tempStudent;
                } else {
                  return list;
                }
              });
              setGroup(tempGroup);
              setTempStudent(Tododata);
            }
          } }
          
          type="submit"
        >
          {tempStudent.index === -1 ? "Add Data" : "Edit Data"}
        </button>
      </div>
      <div className="container2">
      <table>
        <tr>
          <th>DATA</th>
          
        </tr>
        {group.length > 0 ? (
          group.map((list, index) => (
            <tr key={index}>
              <td>{list.data}</td>
             
              <th>
                <button
                  onClick={() => {
                    let tempGroup = [...group];
                    tempGroup.splice(index, 1);
                    setGroup(tempGroup);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setTempStudent({ ...list, index: index });
                  }}
                >
                  Edit
                </button>
              </th>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No data available.</td>
          </tr>
        )}
      </table>
      </div>
    </div>
  );
};

export default Test;