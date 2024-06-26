import React from "react";
import {useLocation} from "react-router";
import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import Add from "../../components/buttons/Add";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from "axios";


export default function Roles(props) {
    const item = useLocation().state;

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        Axios.get(apis.base+apis.roles, {
            headers: {
                userId: 1
            }
        }).then((succResp) => {
            callback(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })
    }, []);

    const callback = (res) => {
        setData(res.data)
    };

    const url = window.location.href;

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Role List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>
            <div className="container"><br/>
                <CustomTable
                    type={{
                        "role name": 'role_name'
                    }}
                    typeEx={{}}
                    style={{}}
                    image={[]}
                    button={{
                        "ACTION": [buttonType.edit, buttonType.delete],
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data}
                    api={apis.roles} primaryKey={"role_id"}
                />

            </div>

        </div>

    )
}