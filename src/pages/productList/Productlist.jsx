import './productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";
import {useState} from "react";

export default function ProductList() {
  const [data,setData] = useState(productRows);
  const handleDelete= (id) => {
    setData(data.filter((item) => item.id!==id));
};


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'product', headerName: 'Product', width: 180, renderCell:(params)=>{
      return (
          <div className="product-list-item">
              <img className="product-list-img" src={params.row.img} alt=""/>
              {params.row.productname}
          </div>
      )
  }},
  { field: 'stock', headerName: 'Stock', width: 180 },
  {
    field: 'status',
    headerName: 'Status',
    type: 'number',
    width: 90,
  },
  {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) =>{
          return(
              <>
              <Link to={"/product/"+params.row.id}>
                  <button className="product-list-edit">Edit</button>
              </Link>
              <DeleteOutlineIcon className="product-list-delete" onClick={()=> handleDelete(params.row.id)} />
              </>
          )
      }
    },
];

  return (
    <div className="product-list">
    <DataGrid
    disableSelectionOnClick
    rows={data}
    columns={columns}
    pageSize={8}
    rowsPerPageOptions={[5]}
    checkboxSelection
  />
</div>
  )
}
