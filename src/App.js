import axios from "axios";
import Filter from "./components/Filter";
import BrigadesList from "./components/BrigadesList";
import { Divider } from "antd";
import urls from "./data/url";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [brigades, setBrigades] = useState([]);
    const [departments, setDepartment] = useState([]);
    const [connection, setConnection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(undefined);
    const [selectedConnection, setSelectedConnection] = useState(undefined);

    useEffect(() => {
        axios
            .all([
                axios.get(urls.brigades),
                axios.get(urls.departments),
                axios.get(urls.connectios),
            ])
            .then(
                axios.spread((brigadesRes, departmentsRes, connectiosRes) => {
                    setBrigades(brigadesRes.data);
                    setDepartment(departmentsRes.data);
                    setConnection(connectiosRes.data);
                })
            )
            .catch((error) => setError(error.message))
            .finally(setIsLoading(false));
    }, []);

    function handleConnectionChange(data) {
        setSelectedConnection(data);
    }
    function handleDepartmentChange(data) {
        setSelectedDepartment(data);
    }

    if (isLoading) {
        return (
            <div className="App">
                <h1>Data Loading ...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="App">
                <h1>{error}</h1>
            </div>
        );
    }

    return (
        <div className="App">
            <Filter
                departments={departments}
                connection={connection}
                handleConnectionChange={handleConnectionChange}
                handleDepartmentChange={handleDepartmentChange}
            />
            <Divider />
            <BrigadesList
                brigades={brigades}
                departments={departments}
                connection={connection}
                selectedDepartment={selectedDepartment}
                selectedConnection={selectedConnection}
            />
        </div>
    );
}

export default App;
