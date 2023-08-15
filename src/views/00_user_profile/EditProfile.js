import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import CustomImage from "../../components/CustomImage";
import Axios from "axios";

export default function EditProfile(props) {

    const [data, setData] = React.useState({
       
        email: "",
    
        name: ""
     
    });
    


    React.useEffect(() => {
    var bn=JSON.parse(sessionStorage.getItem("user"));
    callback(bn);
        let body = {
            method: "get",
            email: JSON.parse(sessionStorage.getItem("user")).email
        };
        let formData = new FormData();
        formData.append("payload", JSON.stringify(body));
        const res = sendRequest(apis.base + apis.admin, formData, ((res) => callback2(res)), ((err) => console.log(err)));
    }, []);

    const callback2 = (res) => {
        setData(res.data[0])
    };

    const callback = (res) => {
        setData(res)
    };

    const [image, setImage] = React.useState("");


    const submit = () => {
       
       var cv=JSON.parse(sessionStorage.getItem("user"));
        Axios.put(apis.base + apis.userList , {...cv,...data} ).then(succresp => {
            // callbackSubmit(succresp);
            sessionStorage.removeItem("user");
            sessionStorage.setItem("user",JSON.stringify({...cv,...data}))
        }).then(succresp => {
            console.log("succresp",succresp)
        });
    
    };


    const url=window.location.href;
    const callbackSubmit = (res) => {
        if(res.status===200){
            window.location.href=url;
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Profile</h4>
            </div>
            <div className="card-body">
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Admin Name</label>
                        <input type="text" value={data.name}
                               onChange={(event) => setData({...data, name: event.target.value})}
                               className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label>Admin Email</label>
                        <input type="email" value={data.email}
                               onChange={(event) => setData({...data, email: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <CustomImage src={data.admin_image} className="height-100 width-100"/>
                </div>
                <div className="form-group">
                    <div className="custom-file">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" accept="image/*"
                                   onChange={(event) => setImage(event.target.files[0])}/>
                            <label className="custom-file-label" htmlFor="customFile">Choose Admin Profile</label>
                        </div>
                    </div>
                </div>

                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Update Profile
                </button>
            </div>
        </div>

    )
}