import React from "react";
import {apis} from "../../configuration/configurationApi";
import {sendRequest} from "../../api/sendRequest"
import Axios from 'axios';

export default function BulkUpload(props) {

    const [productFile, setProductFile] = React.useState("");
    const [VariantFile, setVariantFile] = React.useState("");

    const submitProduct =(() => {
        Axios.post(apis.base+apis.bulkUploadProduct, {
            headers: {
                user_id: 7
            }
        }).then((succResp) => {
            callback(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })

    },
     []);

    const submitVariant =( () => {
        Axios.post(apis.base+apis.bulkUploadVariant, {
            headers: {
                user_id: 7
            }
        }).then((succResp) => {
            callback(succResp);
        }, (errorresp) => {
            console.log(JSON.stringify(errorresp));
        })

    }, []);  

    const url = window.location.href;
    const callback = (res) => {
        if (res.status === 200) {
            window.location.href = url;
        }
    };


    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5>Instructions</h5>
                    </div>
                    <div className="card-body">
                        <ol className="pl-3">
                            <li>Only CSV file are allowed.</li>
                            <li>First row need to keep blank or use for column name only.</li>
                            <li>All fields are must needed in csv file.</li>
                            <li>fill the cat id(Which is available in Category list) od subcategory(which has a
                                parent category) in category_id column of csv file.
                            </li>
                            <li>Insert tags in tags column separated by comma.</li>
                            <li>Please upload the images on images/products path inside your main project
                                directory.
                            </li>
                            <li><a href={process.env.PUBLIC_URL + '/csv_sample/products.csv'} download="products.csv"
                                   className="download-style">Download Sample File</a></li>
                        </ol>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5 className="panel-title">Bulk Products Upload</h5>
                    </div>
                    <div className="card-body">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"
                                   accept=".csv"
                                   name="select_file" data-allowed-file-extensions="csv" required=""
                                   onChange={(event) => setProductFile(event.target.files[0])}
                            />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-xs" onClick={submitProduct}>
                                Import Products
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5>Instructions</h5>
                    </div>
                    <div className="card-body">
                        <ol className="pl-3">
                            <li>Only CSV file are allowed.</li>
                            <li>First row need to keep blank or use for column name only.</li>
                            <li>All fields are must needed in csv file.</li>
                            <li>fill the product id(Which is available in product list) in product_id column of
                                csv file.
                            </li>
                            <li>Insert tags in tags column separated by comma.</li>
                            <li><a href={process.env.PUBLIC_URL + '/csv_sample/variants.csv'} download="variants.csv"
                                   className="download-style">Download Sample File</a></li>
                        </ol>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h5 className="panel-title">Bulk Variants Upload</h5>
                    </div>
                    <div className="card-body">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"
                                   accept=".csv"
                                   name="select_file" data-allowed-file-extensions="csv" required=""
                                   onChange={(event) => setVariantFile(event.target.files[0])}
                            />
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-xs" onClick={submitVariant}>
                                Import Variants
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
