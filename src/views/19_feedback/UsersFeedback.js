import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import CustomTable from "../../components/CustomTable";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from "axios";

export default function UsersFeedback(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        Axios.get(apis.base + apis.userFeedbackList,{
            headers: {
                userId: 30
            }
        }).then((succResp)=>{
            callback(succResp);
        },(errorresp)=>{
            console.log("From error")
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
                        <h1 className="card-title"><b>Users Feedback</b></h1>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "user": 'name',
                        "feedback": 'user_feedback',
                    }}
                    typeEx={{}}
                    style={{}}
                    image={[]}
                    button={{}}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.userFeedbackList} primaryKey={"id"}/>

            </div>
        </div>

    )
}