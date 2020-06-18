import React from "react";
import { uuid } from "uuidv4";
import styles from "./Table.module.css";

export default (props) => (
  <table className="table">
    <thead>
      {props.data.header.map((i, idx) => (
        <tr key={uuid()}>
          {i.map((el) => (
            <th
              key={uuid()}
              id={idx}
              className={styles.header}
              style={{ top: idx * 36 + "px", bottom: idx * 36 + "px" }}
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
