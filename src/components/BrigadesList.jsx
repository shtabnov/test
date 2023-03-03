import React from "react";
import BrigadesCard from "./BrigadesCard";
import styles from "./BrigadesList.module.css";

const BrigadesList = ({ brigades, departments, connection }) => {
    return (
        <div className={styles.brigades}>
            {brigades.map((brigada) => (
                <BrigadesCard
                    key={brigada.id}
                    brigada={brigada}
                    department={departments.filter(
                        (department) => department.id === brigada.department.id
                    )}
                    connection={connection.filter(
                        (status) =>
                            status.connectionStateId ===
                            brigada.connectionStateId
                    )}
                />
            ))}
        </div>
    );
};

export default BrigadesList;
