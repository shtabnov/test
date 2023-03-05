import React from "react";
import { Select } from "antd";
import styles from "./Filter.module.css";

const Filter = ({
    departments,
    connection,
    handleConnectionChange,
    handleDepartmentChange,
}) => {
    return (
        <div className={styles.filter}>
            <div className={styles.selectbox}>
                <span>Соединение:</span>
                <Select
                    defaultValue={null}
                    style={{ width: 200 }}
                    allowClear
                    options={connection.map((status) => {
                        return {
                            id: status.connectionStateId,
                            value: status.name,
                            label: status.name,
                        };
                    })}
                    onChange={(_val, option) => handleConnectionChange(option)}
                />
            </div>
            <div className={styles.selectbox}>
                <span>Департамент:</span>
                <Select
                    defaultValue={null}
                    style={{ width: 200 }}
                    allowClear
                    options={departments.map((department) => {
                        return {
                            id: department.id,
                            value: department.name,
                            label: department.name,
                        };
                    })}
                    onChange={(_val, option) => handleDepartmentChange(option)}
                />
            </div>
        </div>
    );
};

export default Filter;
