import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

import {routers} from "../../configuration/configurationUI";
import CustomImage from "../../components/CustomImage";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";

import Axios from "axios";

export default function ParentCategoryEdit(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState(
    //     {
    //     parent: item.parent,
    //     title: item.title,
    //     image: item.image,
    //     description: item.description

    // }

    {
            
        "title": item.title,
        "slug": "",
        "url": "",
        "image": item.image,
        "parent": item.parent,
        "level": 0,
        "description": item.description,
        "status": 0,
        "added_by": 0,
        "tax_type": 0,
        "tax_name": "",
        "tax_per": 0,
        "tx_id": 0,
        "hide": 0
      }
    
    );
    const [categories, setCategories] = React.useState([]);
    React.useEffect(() => {
        // let body = {
        //     method: "get",
        //     where: ["cat_id!=" + item.cat_id]
        // };
        // let formData = new FormData();
        // formData.append("payload", JSON.stringify(body));
        // const res = sendRequest(apis.base + apis.categoryListAll, formData, ((res) => callback(res)), ((err) => console.log(err)));
        Axios.get(apis.base+apis.AllCategory, {
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
        setCategories(res.data);
    };
    const [image, setImage] = React.useState("");
    const submit = () => {
        // let body = {
        //     method: "update",
        //     data: data,
        //     where: ["cat_id=" + item.cat_id]
        // };
        // let formData = new FormData();
        // formData.append("payload", JSON.stringify(body));
        // formData.append("image", image);
        // const res = sendRequest(apis.base + apis.categoryListAll, formData, ((res) => callbackSubmit(res)), ((err) => console.log(err)));
   
        Axios.put(apis.base + apis.updateCategory + item.cat_id, data).then(succresp => {
            console.log("succresp",succresp);
            callbackSubmit(succresp);
        });
    
   
    };
    const callbackSubmit = (res) => {
        if (res.status === 200) {
            window.location.href = routers.subCategoryList
        }
    };

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title">Edit Sub Category</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <CustomImage src={data.image}/>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Parent Category</label>
                        <select value={data.parent}
                                onChange={(event) => setData({...data, parent: event.target.value})}
                                className="form-control">
                            {categories.map((val, index) => (
                                <option key={index} value={val.cat_id}>{val.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label>Title</label>
                        <input type="text" value={data.title}
                               onChange={(event) => setData({...data, title: event.target.value})}
                               className="form-control"/>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label>Image (It Should Be Less Then 1000 KB)</label>
                        <div className="custom-file">
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" accept="image/*"
                                       onChange={(event) => setImage(event.target.files[0])}/>
                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Description</label>
                        <textarea value={data.description}
                                  onChange={(event) => setData({...data, description: event.target.value})}
                                  className="form-control"/>
                    </div>
                </div>
                <br/>
                <button onClick={submit} className="btn btn-primary pull-center mr-1">
                    Submit
                </button>
                <Link to={routers.subCategoryList} className="btn btn-danger pull-center">
                    Close
                </Link>
            </div>
        </div>

    )
}