import React from "react";
import BrigadesCard from "./BrigadesCard";
import styles from "./BrigadesList.module.css";

const BrigadesList = ({
    brigades,
    departments,
    connection,
    selectedConnection,
    selectedDepartment,
}) => {
    if (selectedDepartment === undefined && selectedConnection === undefined) {
        console.log("none filter");
        return (
            <div className={styles.brigades}>
                {brigades.map((brigade) => (
                    <BrigadesCard
                        key={brigade.id}
                        brigade={brigade}
                        department={departments.filter(
                            (department) =>
                                department.id === brigade.department.id
                        )}
                        connection={connection.filter(
                            (status) =>
                                status.connectionStateId ===
                                brigade.connectionStateId
                        )}
                    />
                ))}
            </div>
        );
    }
    if (!!selectedConnection && !!selectedDepartment) {
        console.log("double filter");
        return (
            <div className={styles.brigades}>
                {brigades
                    .filter(
                        (brigade) =>
                            brigade.connectionStateId === selectedConnection.id
                    )
                    .filter(
                        (brigade) =>
                            brigade.department.id === selectedDepartment.id
                    )
                    .map((brigade) => (
                        <BrigadesCard
                            key={brigade.id}
                            brigade={brigade}
                            department={departments.filter(
                                (department) =>
                                    department.id === brigade.department.id
                            )}
                            connection={connection.filter(
                                (status) =>
                                    status.connectionStateId ===
                                    brigade.connectionStateId
                            )}
                        />
                    ))}
            </div>
        );
    }
    if (selectedDepartment === undefined && !!selectedConnection) {
        console.log("connection filter");
        return (
            <div className={styles.brigades}>
                {brigades
                    .filter(
                        (brigade) =>
                            brigade.connectionStateId === selectedConnection.id
                    )
                    .map((brigade) => (
                        <BrigadesCard
                            key={brigade.id}
                            brigade={brigade}
                            department={departments.filter(
                                (department) =>
                                    department.id === brigade.department.id
                            )}
                            connection={connection.filter(
                                (status) =>
                                    status.connectionStateId ===
                                    brigade.connectionStateId
                            )}
                        />
                    ))}
            </div>
        );
    }
    if (selectedConnection === undefined && !!selectedDepartment) {
        console.log("department filter");
        return (
            <div className={styles.brigades}>
                {brigades
                    .filter(
                        (brigade) =>
                            brigade.department.id === selectedDepartment.id
                    )
                    .map((brigade) => (
                        <BrigadesCard
                            key={brigade.id}
                            brigade={brigade}
                            department={departments.filter(
                                (department) =>
                                    department.id === brigade.department.id
                            )}
                            connection={connection.filter(
                                (status) =>
                                    status.connectionStateId ===
                                    brigade.connectionStateId
                            )}
                        />
                    ))}
            </div>
        );
    }
};

export default BrigadesList;
