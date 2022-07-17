import './product.css'
import {Link} from "react-router-dom";
import Chart from '../../components/charts/Chart'
import PublishIcon from '@mui/icons-material/Publish';

export default function product() {
  return (
<div className="product">
    <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/newProduct">
        <button className="product-add-button">Create</button>
        </Link>
    </div>
    <div className="product-top">
        <div className="product-top-left">
            <Chart data={productData} title="User Analytics" grid dataKey="Active User" />
        </div>
        <div className="product-top-right">
            <div className="product-top-info">
                <img src="" alt="" className="product-info-img"/>
                <span className="product-name">Lace cropped top</span>
            </div>
            <div className="product-bottom-info">
                <div className="product-info-item">
                    <span className="product-info-key">id:</span>
                    <span className="product-info-value">{}</span>
                </div>
                <div className="product-info-item">
                    <span className="product-info-key">sales:</span>
                    <span className="product-info-value">{}</span>
                </div>
                <div className="product-info-item">
                    <span className="product-info-key">active:</span>
                    <span className="product-info-value">{}</span>
                </div>
                <div className="product-info-item">
                    <span className="product-info-key">in stock:</span>
                    <span className="product-info-value">{}</span>
                </div>
            </div>
        </div>
    </div>
    < div className="product-bottom">
        <form className="product-form">
            <div className="product-form-left">
                <label>Product Name</label>
                <input type="text" placeholder="Lace cropped top"/>
                <label>In Stock</label>
                <select name="in-stock" id="id-stock">
                    <option value="yes"></option>
                    <option value="yes"></option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes"></option>
                    <option value="yes"></option>
                </select>
            </div>
            <div className="product-form-right">
                <div className="product-upload">
                    <img src="" alt="" className="product-upload-img"/>
                    <label for="file">
                        <PublishIcon/>
                    </label>
                    <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="product-button">Update</button>
            </div>
        </form>
    </div>
</div>
  )
}
