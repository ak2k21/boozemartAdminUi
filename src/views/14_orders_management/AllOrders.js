import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from "axios";
export default function AllOrders(props) {
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
        setData(res.data)
    };
    const url = window.location.href;

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>All orders</b></h1>
                    </div>

                </div>
            </div>

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "cart id": 'cart_id',
                        "cart price": 'total_price',
                        "user": 'user_details',
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
                    data={data} api={apis.adminAllOrders} primaryKey={"id"}

                    detailTitle={"Order Detail"}
                    detailType={{
                        "Order ID": "order_id",
                        "Customer Name": "user_details",
                        "Contact": "user_details",
                        "Delivery Date": "delivery_date",
                        "Open time": "store_opening_time",
                        "Close time": "store_closing_time",
                        "Delivery Address Home": "house_no",
                        "Product Image": "store_photo",
                        "Product Name": "products_and_varients",
                        "Qty": "f",
                        "Tax": "total_tax_price",
                        "Price": "total_products_mrp",
                        "Total Price": "total_price",
                        "Product Price": "price_without_delivery",
                        "Delivery Charge": "delivery_charge",
                        "Net Total(Payable)": "total_price",
                    }}
                    detailImage={["product image"]}
                />

            </div>
        </div>

    )
}
