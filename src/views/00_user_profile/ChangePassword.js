import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from "axios";
export default function ChangePassword(props) {

    const [data, setData] = React.useState({
        currentPassword:"",
        newPassword: ""
    });

    const submit = () => {

        var cv=JSON.parse(sessionStorage.getItem("user"));
        console.log(data);
        Axios.post(apis.base+apis.login,{id:cv.id,email:cv.email,password:data.currentPassword}).then((res) => {
            if(res.data.authenticated) {
                
        Axios.put(
            apis.base + apis.changePassword,
            { password: data.newPassword }, 
            {
              headers: { userId: JSON.stringify(cv.id) } 
            }
          );

          Axios.get(apis.base+apis.user+cv.id).then((res) => {
                                        sessionStorage.removeItem("user");
                                        sessionStorage.setItem("user",JSON.stringify(res.data))
                                    }, (errorresp) => {
                                        console.log(JSON.stringify(errorresp));
                                    })  
                                }

        },(errorresp) => {
                    console.log(JSON.stringify(errorresp));
                })

            }

    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href="/";
        } else if (res.status === 404) {
            console.log("wrong password");
        }
    };


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Change Password</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Current Password</label>
                    <input type="text" value={data.currentPassword}
                           onChange={(event) => setData({...data, currentPassword: event.target.value})}
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input type="text" value={data.newPassword}
                           onChange={(event) => setData({...data, newPassword: event.target.value})}
                           className="form-control"/>
                </div>
                <br/>
                <button onClick={submit} type="submit" className="btn btn-primary pull-center mr-1">
                    Update Password
                </button>
            </div>
        </div>

    )
}