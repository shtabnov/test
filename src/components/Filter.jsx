import React from "react";
import { Select } from "antd";
import styles from "./Filter.module.css";

const Filter = ({ departments, connection }) => {
    return (
        <div className={styles.filter}>
            <div className={styles.selectbox}>
                <span>Соединение:</span>
                <Select
                    defaultValue=""
                    style={{ width: 200 }}
                    allowClear
                    options={connection.map((status) => {
                        return {
                            value: status.name,
                            label: status.name,
                        };
                    })}
                />
            </div>
            <div className={styles.selectbox}>
                <span>Департамент:</span>
                <Select
                    defaultValue=""
                    style={{ width: 200 }}
                    allowClear
                    options={departments.map((department) => {
                        return {
                            value: department.name,
                            label: department.name,
                        };
                    })}
                />
            </div>
        </div>
    );
};

export default Filter;
