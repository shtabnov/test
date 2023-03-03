import axios from "axios";
import Filter from "./components/Filter";
import BrigadesList from "./components/BrigadesList";
import urls from "./data/url";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [brigades, setBrigades] = useState([]);
    const [departments, setDepartment] = useState([]);
    const [connection, setConnection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            .catch((error) => console.log(error))
            .finally(setIsLoading(false));
    }, []);

    if (isLoading) {
        return <h1>Data Loading ...</h1>;
    }

    return (
        <div className="App">
            <Filter departments={departments} connection={connection} />
            <BrigadesList
                brigades={brigades}
                departments={departments}
                connection={connection}
            />
        </div>
    );
}

export default App;
