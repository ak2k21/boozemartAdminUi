import React from "react";
import {useLocation} from "react-router";

import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import MultiSelect from "../../components/MultiSelect";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from "axios";
export default function TrendingSearch(props) {
    const item = useLocation().state;var data2="";

    const url = window.location.href;

    const [product, setProduct] = React.useState([]);
    const [productSelected, setProductSelected] = React.useState([]);

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
       
        Axios.get(apis.base+apis.trendingSearchProduct).then((succResp) => {
            callback2(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })

   
    }, []);

    const callback1 = (res) => {
        setProduct(res.data)
    };


    const callback2 = (res) => {
        setProductSelected(res.data);
        let result = res.data;
        let where = [];
        for (let i = 0; i < result.length; i++) {
            where.push('Variant_id!=' + result[i].Variant_id)
        }
        Axios.get(apis.base+apis.productList).then((succResp) => {
            callback1(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })
        
    };

    const contain = (item) => {
        for (let i = 0; i < productSelected.length; i++) {
            if (productSelected[i].Variant_id === item.Variant_id) {
                return true;
            }
        }
        return false;
    };

    const submit = () => {
        
       for(var i=0;i<data.length;i++) {
         data2=data2+","+data[i].product_id;
       }
       data2=data2.slice(1);
        Axios.post(apis.base+apis.setTrendingSearchProduct,{"setTrendingProducts":data2}).then((succResp) => {
            callbackSubmit(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })
   
    };

    const callbackSubmit = () => {
        window.location.href = url;
    };

    const selectData = (checked, eachData) => {
        if (checked) {
            let d = data;
            d.push(eachData);
            setData([...d])
        } else {
            setData([...data.filter(item => item !== eachData)])
        }
    };

    const selectAll = (checked) => {
        if (checked) {
            let dataAdded = data;
            for (let i = 0; i < product.length; i++) {
                if (!dataAdded.includes(product[i])) {
                    dataAdded.push(product[i]);
                }
            }
            setData([...dataAdded]);
        } else {
            setData([]);
        }
    };


    return (
        <div className="row">
            <div className="col-5">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <h4 className="card-title">Select Products</h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <MultiSelect
                                    title={"Select Products Which You have to set on Trending Search"}
                                    data={product}
                                    dataSelected={data}
                                    selectAll={(checkState) => selectAll(checkState)}
                                    selectData={(checkState, item) => selectData(checkState, item)}
                                    name={"product_name"}
                                />
                            </div>
                        </div>
                        <button onClick={submit} type="submit"
                                className="btn btn-primary pull-center">
                            Submit
                        </button>

                    </div>
                </div>
            </div>
            <div className="col-7">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <h4 className="card-title">Selected Products</h4>
                    </div>

                    <div className="container"><br/>
                        <CustomTable
                            type={{
                                "PRODUCT NAME": 'product_name',
                            }}
                            typeEx={{}}
                            style={{}}
                            image={["image"]}
                            button={{
                                "ACTION": [buttonType.delete],
                            }}
                            buttonEx={{}}
                            searchField={true}
                            data={productSelected}
                            primaryKey={"trend_id"}
                            api={apis.trendingSearchProductSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}