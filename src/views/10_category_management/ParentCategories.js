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
export default function ParentCategories(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        Axios.get(apis.base+apis.categoryList, {
            headers: {
                user_id: 7
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
                        <h1 className="card-title"><b>Category List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "title": 'title',
                        "category image": 'image',
                        "cat id": 'cat_id',
                    }}
                    typeEx={{}}
                    style={{}}
                    image={["category image"]}
                    button={{
                        "ACTION": [buttonType.edit, buttonType.delete],
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.categoryList} primaryKey={"cat_id"}/>

            </div>
        </div>

    )
}