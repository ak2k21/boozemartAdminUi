import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";
import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";

import {buttonType} from "../../configuration/configurationUI";
import Add from "../../components/buttons/Add";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from "axios";

export default function Tax(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
     
        Axios.get(apis.base+apis.taxList).then((succResp) => {
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
                        <h1 className="card-title"><b>Tax Type List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable type={{"TAX TYPE NAME": "tax_name"}}
                             typeEx={{}}
                             style={{}}
                             image={[]}
                             button={{
                                 "ACTION": [buttonType.edit, buttonType.delete],
                             }}
                             buttonEx={{}}
                             searchField={true}
                             data={data} api={apis.taxList} primaryKey={"tx_id"}/>

            </div>
        </div>

    )
}