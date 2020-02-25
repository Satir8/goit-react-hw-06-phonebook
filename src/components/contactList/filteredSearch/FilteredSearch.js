import React from "react";
import styles from "./FilteredSearch.module.css";

const FilteredSearch = ({ valueFilter, onChangeFilter }) => {
  return (
    <div className={styles.filterBox}>
      <div className={styles.formWrapper}>
        <label className={styles.label}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={valueFilter}
            onChange={onChangeFilter}
            className={styles.input}
          />
        </label>
      </div>
    </div>
  );
};

export default FilteredSearch;
