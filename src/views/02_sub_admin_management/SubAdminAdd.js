import React from "react";
import {useLocation} from "react-router";
import Axios from "axios";
import {Link} from "react-router-dom";
import {routers} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

export default function SubAdminAdd(props) {
    const item = useLocation().state;

    const [data, setData] = React.useState({
        name: "",
        email: "",
        admin_image: "",
        role_id: "",
        password: "",
        role_name:""

    });
    const [roles, setRoles] = React.useState([]);
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
        setRoles(res.data);
        if (res.data.length > 0) {
            setData({...data, role_id: res.data[0].role_id});
        }
    };
    const [image, setImage] = React.useState("");

    const submit = () => {
        Axios.post(apis.base+apis.addAdmin,data).then((succResp) => {
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
                <h4 className="card-title">Add Sub-Admin</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Sub Admin Name</label>
                        <input type="text" value={data.name}
                               onChange={(event) => setData({...data, name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Email</label>
                        <input type="email" value={data.email}
                               onChange={(event) => setData({...data, email: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Image</label>
                        <div className="custom-file">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" accept="image/*"
                                       onChange={(event) => setImage(event.target.files[0])}
                                />
                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Role Name</label>
                        <select value={data.role}
                                onChange={(event) => setData({...data, role_id: event.target.value})}
                                className="form-control">
                            {roles.map((val, index) => (
                                <option key={index} value={val.role_id}>{val.role_name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Password</label>
                        <input type="text" value={data.password}
                               onChange={(event) => setData({...data, password: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <br/>

                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.subAdminList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}
