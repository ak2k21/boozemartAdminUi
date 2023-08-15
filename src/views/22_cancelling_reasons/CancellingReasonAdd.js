import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";
import CustomTable from "../../components/CustomTable";
import {Link} from "react-router-dom";

import {buttonType, routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from "axios";

export default function CancellingReasonAdd(props) {

    const [data, setData] = React.useState({
        reason: ""
    });
    const submit = () => {
       
        Axios.post(apis.base+apis.cancellingReasonsList,data).then((succResp) => {
            callbackSubmit(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })
   
    };
    const callbackSubmit = (res) => {
        window.location.reload(true);
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Add Reason</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Reason</label>
                    <input type="text" value={data.reason}
                           onChange={(event) => setData({...data, reason: event.target.value})}
                           className="form-control"/>
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.cancellingReasonsList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}

