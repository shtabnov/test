import React from "react";
import { Card } from "antd";
import { CheckCircleOutlined, StopOutlined } from "@ant-design/icons";
import styles from "./BrigadesCard.module.css";

const BrigadesCard = ({ brigade, department, connection }) => {
    const { brigade_name, position } = brigade;

    return (
        <div className={styles.brigada}>
            <Card size="small" title={brigade_name} bordered={true}>
                <div className={styles.description}>
                    <h3>{department[0].name}</h3>
                    <span
                        className={
                            connection[0].connectionStateId
                                ? styles.connection
                                : styles.connection_without
                        }
                    >
                        <b>Соединение: </b> {connection[0].name + " "}
                        <span>
                            {connection[0].connectionStateId ? (
                                <CheckCircleOutlined />
                            ) : (
                                <StopOutlined />
                            )}
                        </span>
                    </span>

                    <span>
                        <b>Кластер</b>: {position.field}
                    </span>
                    <span>
                        <b>Поле</b>: {position.cluster}
                    </span>
                    <span>
                        <b>Скважина</b>: {position.well}
                    </span>
                </div>
            </Card>
        </div>
    );
};

export default BrigadesCard;
