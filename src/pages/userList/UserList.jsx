import './userlist.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from "react-router-dom";
import {useState} from "react";
export default function UserList() {
    const [data,setData] = useState(userRows);

    const handleDelete= (id) => {
        setData(data.filter((item) => item.id!==id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 180, renderCell:(params)=>{
            return (
                <div className="user-list-user">
                    <img className="user-list-img" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'E-mail', width: 180 },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 90,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
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
                    <Link to={"/user/"+params.row.id}>
                        <button className="user-list-edit">Edit</button>
                    </Link>
                    <DeleteOutlineIcon className="user-list-delete" onClick={()=> handleDelete(params.row.id)} />
                    </>
                )
            }
          },
      ];
      

  return (
    <div className="user-list">
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
