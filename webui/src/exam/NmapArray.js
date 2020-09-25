import React from 'react';

export default function NmapArray(){
    
    const students = [ {name:"이수만", age:"60", address:"인천"}
                    ,{name:"유희열", age:"45", address:"서울"}
                    ,{name:"방시혁", age:"43", address:"부산"}
                    ,{name:"박진영", age:"34", address:"광주"}
                   ]
    
    return (
        <>
        <p></p>
      <table>
        <thead>
            이름   나이  주소
          <tbody>
            {students.map((students, index) =>
            {return <tr key={index}><td>{students.name}</td>
                                      <td>{students.age}</td>
                                      <td>{students.address}</td></tr>
              })}
          </tbody>
        </thead>
      </table>
        </>
    )
}
