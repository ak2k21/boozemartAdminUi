import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import {buttonType, routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from "axios";


export default function CancellingReasonEdit(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState({
        reason: item.reason
    });


    const submit = () => {
       
        Axios.put(apis.base+apis.CancellingReason+item.res_id,data).then((succResp) => {
            callbackSubmit(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })

    
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.cancellingReasonsList
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Reason</h4>
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

