import React from "react";
import styles from "./Table.module.css";

const Table = ({ type, data }) => {
  const renderTableHeader = () => {
    if (type === "coffee") {
      return (
        <tr>
          <th>Title</th>
          <th>Country</th>
          <th>Caffeine</th>
          <th>Total Price</th>
        </tr>
      );
    } else if (type === "ingredients") {
      return (
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Flavor</th>
        </tr>
      );
    }
  };

  const renderTableBody = () => {
    if (type === "coffee") {
      return data.map((item, index) => (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{item.country}</td>
          <td>{item.caffeine}</td>
          <td>{item.totalPrice}</td>
        </tr>
      ));
    } else if (type === "ingredients") {
      return data.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.flavor}</td>
        </tr>
      ));
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
