import React from "react";
import {useLocation} from "react-router";
import {example} from "../../data/examData";

import {Link} from "react-router-dom";
import CustomTable from "../../components/CustomTable";
import {buttonType} from "../../configuration/configurationUI";
import Add from "../../components/buttons/Add";
import {sendRequest} from "../../api/sendRequest";
import {apis} from "../../configuration/configurationApi";
import Axios from 'axios';
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { blue } from "@mui/material/colors";

export default function AdminProducts(props) {
    const item = useLocation().state;


    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        Axios.get(apis.base+apis.productList, {
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
    const downloadCSV = () => {
        const csvHeader = Object.keys(data[0]).join(',');
        const csvRows = data.map((row) => Object.values(row).join(','));
        const csvContent = `${csvHeader}\n${csvRows.join('\n')}`;
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'data.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4',
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1,
          backgroundColor:'#00FFFF'
        },
        table: {
          display: 'table',
          width: 'auto',
        },
        tableRow: {
          flexDirection: 'row',
          backgroundColor: '#CCCCFF',

        },
        tableHeader: {
          backgroundColor: '#CCCCFF',
          padding: 5,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#000',
        },
        tableCell: {
          padding: 5,
          flex: 1,
          height:50,
          width:50,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#000',
        },
      });
   
      const MyDoc = () => (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              {/* <View style={styles.table}> */}
                {data.map((product) => (
                    <View style={styles.section}>
                        {/* <View style={styles.table}>
                                <View key={product.product_id} style={styles.tableRow}>
                                            <View style={styles.tableHeader}>
                                            <Text>Name</Text>
                                            </View>
                                 </View>
                                <View key={product.product_id} style={styles.tableRow}>
                                            <View style={styles.tableCell}>
                                            <Text>{product.product_name}</Text>
                                            </View>
                                </View>
                        </View> */}
  <View style={styles.table}>
  {/* Column: product_id */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Product ID</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.product_id}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: cat_id */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Category ID</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.cat_id}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: brand_id */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Brand ID</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.brand_id}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: product_name */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Product Name</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.product_name}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: product_image */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Product Image</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      {/* Render the product image here */}
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: Image_Thumb_Nail */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Thumbnail</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      {/* Render the thumbnail image here */}
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: type */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Type</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.type}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: hide */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Hide</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.hide}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: added_by */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Added By</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.added_by}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: approved */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Approved</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.approved}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: admin_share */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Admin Share</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.admin_share}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: featured */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Featured</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.featured}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: price */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Price</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.price}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: weight */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Weight</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.weight}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: discount */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Discount</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.discount}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: cartCount */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Cart Count</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.cartCount}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: isFavourite */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Is Favourite</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.isFavourite}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: detail */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Detail</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.detail}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: review_count */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Review Count</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.review_count}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: ratingValue */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Rating Value</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.ratingValue}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: brandBrandId */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Brand Brand ID</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.brandBrandId}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: ordered_times_count */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Ordered Times Count</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.ordered_times_count}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: seller_rank */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Seller Rank</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.seller_rank}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: gift_times_count */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Gift Times Count</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.gift_times_count}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: gift_ranking */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Gift Ranking</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.gift_ranking}</Text>
    </View>
  </View>
</View>

<View style={styles.table}>
  {/* Column: trending_rank */}
  <View style={styles.tableRow}>
    <View style={styles.tableHeader}>
      <Text>Trending Rank</Text>
    </View>
  </View>
  <View key={product.product_id} style={styles.tableRow}>
    <View style={styles.tableCell}>
      <Text>{product.trending_rank}</Text>
    </View>
  </View>
</View>





                    </View>
                    

                    

                    









                ))}
              {/* </View> */}
            </View>
          </Page>
        </Document>
      );

                    
                 
                   
                
      
      
    

    return (
        <div className="card">
            <div className="card-header card-header-primary">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="card-title"><b>Product List</b></h1>
                    </div>
                    <div className="col-md-6">
                        <Add/>
                    </div>
                </div>
            </div>

            <div>
      {/* Render the products */}
     

      {/* Add a button to trigger CSV download */}
      <button onClick={downloadCSV}>Download CSV</button>
    </div>
    <div>
    <div>
    

      {/* Add a PDFDownloadLink to trigger PDF download */}
      <PDFDownloadLink document={<MyDoc />} fileName="data.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
    </div>
 

            <div className="container"><br/>
                <CustomTable
                    type={{
                        "product name": 'product_name',
                        "product id": "product_id",
                        "category": "title",
                        "type": "type",
                    }}
                    typeEx={{"Product Image": 'image'}}
                    style={{}}
                    searchField={true}
                    image={["product image"]}
                    button={{}}
                    buttonEx={{
                        "Hide": [buttonType.showOrHide],
                        "Actions": [buttonType.edit, buttonType.delete, buttonType.Variant]
                    }}
                    data={data} api={apis.productList} primaryKey={"product_id"}/>
            </div>
        </div>
        

        
    )
}