import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from "axios";
export default function PendingOrders(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        
        Axios.get(apis.base+apis.dashBoardOrders, {
            headers: {
                userId: 30
            }
        }).then((succResp) => {
            callback(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })
   
    }, []);

    const callback = (res) => {
        // setData(res.data)
        setData(res.data.filter(a1=>a1.order_status=="Pending"))

    };
    const url = window.location.href;


    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Pending Orders</b></h1>
                    </div>

                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "cart id": 'cart_id',
                        "cart price": 'total_price',
                        "user": 'name',
                        "delivery date": 'delivery_date',
                        "status": 'order_status',
                    }}
                    typeEx={{}}
                    style={{
                        "status": {
                            "completed": "green-bold",
                            "pending": "orange-bold",
                            "cancelled": "red-bold",
                            "payment Failed": "red-bold",
                            "confirmed": "purple-bold",
                            "out_for_delivery": "orange-bold",
                        },
                    }}
                    image={[]}
                    button={{
                        "cart products": [buttonType.detail],
                    }}
                    buttonEx={{}}
                    searchField={true}
                    data={data} api={apis.adminPendingOrders} primaryKey={"id"}

                    detailTitle={"Order Detail"}
                    detailType={{
                        "Order ID": "id",
                        "Customer Name": "category",
                        "Contact": "price",
                        "Delivery Date": "description",
                        "Time Slot": "s",
                        "Delivery Address Home": "a",
                        "Product Image": "image",
                        "Product Name": "d",
                        "Qty": "f",
                        "Tax": "f",
                        "Price": "f",
                        "Total Price": "image",
                        "Product Price": "image",
                        "Delivery Charge": "image",
                        "Net Total(Payable)": "image",
                    }}
                    detailImage={["product image"]}
                />

            </div>
        </div>

    )
}