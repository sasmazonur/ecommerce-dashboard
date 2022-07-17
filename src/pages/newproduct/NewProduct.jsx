import './newproduct.css'

export default function NewProduct() {
  return (
    <div className="newproduct">
        <h1 className="newproduct-title">New Product</h1>
        <form className="newproduct-form">
            <div className="newproduct-item">
                <label>Product Name</label>
                <input type="text" placeholder="Apple iPhone X"className="newproduct-input"/>
            </div>
            <div className="newproduct-item">
                <label>Stock</label>
                <input type="text" placeholder="123"className="newproduct-input"/>
            </div>
            <div className="newproduct-item">
                <label>Active</label>
                <select className="newproduct-select" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="yes">No</option>
                </select>
            </div>
            <button className="newproduct-button">Create</button>
        </form>
    </div>
  )
}
