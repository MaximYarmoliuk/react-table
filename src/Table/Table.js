import React, { useEffect } from "react";
import { uuid } from "uuidv4";
import styles from "./Table.module.css";

export default function Table(props) {
  useEffect(() => {
    const countRow = props.data.header.length;
    const countColumn = props.data.header[0].length;
    for (let i=0; i<countRow; i+=1){
      const offsetTopValue = document.getElementById("td"+i).offsetTop

      for (let n=0; n<countColumn; n+=1){
        
        const el = document.getElementById("th"+i+n)
        const topForEl = el.style.top=offsetTopValue+"px"
        const bottomForEl = el.style.bottom=offsetTopValue+"px"
      }
    }
    
  });
  return (
    <table className="table">
      <thead>
        {props.data.header.map((i, idx) => (
          <tr key={uuid()} id={"td"+idx} style={{height:"auto"}}>
            {i.map((el, index) => (
              <th
                key={uuid()}
                id={"th"+idx+index}
                className={styles.header}
               
              >
                {el}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {props.data.body.map((i) => (
          <tr key={uuid()}>
            {i.map((el) => (
              <td key={uuid()}>{el}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
