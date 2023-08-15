import React from "react";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Modal from "@mui/material/Modal/Modal";
import Axios from "axios";

export default function Delete(props) {


    const url = window.location.href;

    const [data, setData] = React.useState({
        modalState: false,
    });

    const confirm = () => {
        setData({modalState: true});
    };

    const closeModal = () => {
        setData({modalState: false});
    };


    const deleteItem = () => {
        console.log(props);
        if(props.primaryKey=='cat_id') {
        Axios.delete(apis.base+apis.deleteCategory+'/'+props.item[props.primaryKey]).then((succResp) => {
            callback(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        }) }
       
        else if(props.primaryKey=='dboy_id') {
        Axios.delete(apis.base+apis.deliveryBoy+props.item[props.primaryKey]).then((succResp) => {
            callback(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        }) }

        else if(props.primaryKey=='role_id') {
            Axios.delete(apis.base+apis.role+props.item[props.primaryKey]).then((succResp) => {
                callback(succResp);
            }, (errorresp) => {
                console.log(JSON.stringify(errorresp));
            })
        
        }

        else if(props.primaryKey=='id') { 
            Axios.delete(apis.base+apis.admin+props.item[props.primaryKey]).then((succResp) => {
                callback(succResp);
            }, (errorresp) => {
                console.log(JSON.stringify(errorresp));
            })

        }

        else if(props.primaryKey=='res_id') { 
            Axios.delete(apis.base+apis.CancellingReason+props.item[props.primaryKey]).then((succResp) => {
                callback(succResp);
            }, (errorresp) => {
                console.log(JSON.stringify(errorresp));
            })

        }


        else if(props.primaryKey=='tx_id') { 
            Axios.delete(apis.base+apis.deleteTax+props.item[props.primaryKey]).then((succResp) => {
                callback(succResp);
            }, (errorresp) => {
                console.log(JSON.stringify(errorresp));
            })

        }
        
        else if(props.primaryKey=='trend_id') { 
            
            Axios.post(apis.base+apis.reamoveTrendingProduct,{"setTrendingProducts":JSON.stringify(props.item["product_id"])}).then((succResp) => {
                callback(succResp);
            }, (errorresp) => {
                console.log(JSON.stringify(errorresp));
            })

        }
        
        
    };

    const callback = (res) => {
        if (res.status === 200||res) {
            window.location.href = url;
        }
    };


    return (
        <React.Fragment key={url + "_fragment"}>
                <span onClick={() => confirm()} className="btn btn-danger mr-1"><i
                    className="fa fa-trash"/>
                </span>
            <Modal
                open={data.modalState}
                onClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Confirm delete</h4>
                        </div>
                        <div className="modal-body text-center">
                            Do you want to delete this, really?
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={deleteItem}>Delete</button>
                            <button className="btn btn-danger" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )

}