import React from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import {buttonType, routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function TaxAdd(props) {
    const [data, setData] = React.useState({
        tax_name: "",
    });

    const submit = () => {
        
        Axios.post(apis.base+apis.addTax,data).then((succResp) => {
            callbackSubmit(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })
   
    };

    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.taxList
        }
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Add Tax Type</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Tax Type</label>
                    <input type="text" value={data.tax_name}
                           onChange={(event) => setData({...data, tax_name: event.target.value})}
                           className="form-control"/>
                </div>
                <br/>
                <button onClick={submit} type="submit" className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.taxList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}

