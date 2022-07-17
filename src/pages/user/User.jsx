import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublishIcon from '@mui/icons-material/Publish';
import {Link} from "react-router-dom";

export default function User() {
  return (
    <div className="user">
        <div className="user-title-container">
            <h1 className="user-title">Edit User</h1>
            <Link to="/newUser">
            <button className="user-add-button">Create</button>
            </Link>
        </div>
        <div className="user-container">
            <div className="user-show">
                <div className="user-show-top">
                    <img src= "" alt="" className="user-show-img"/>
                    <div className="user-show-top-title">
                        <span className="user-show-username">{}</span>
                        <span className="user-show-user-title">{}</span>
                    </div>
                </div>
                <div className="user-show-bottom">
                    <span className="user-show-title">Account Details</span>
                    <div className="user-show-info">
                        <PermIdentityIcon className="user-show-icon"/>
                        <span className="user-show-info-title">{}</span>
                    </div>
                    <div className="user-show-info">
                        <CalendarTodayIcon className="user-show-icon"/>
                        <span className="user-show-info-title">{}</span>
                    </div>
                    <span className="user-show-title">Contact Details</span>
                    <div className="user-show-info">
                        <PhoneIphoneIcon className="user-show-icon"/>
                        <span className="user-show-info-title">+{}</span>
                    </div>
                    <div className="user-show-info">
                        <MailOutlineIcon className="user-show-icon"/>
                        <span className="user-show-info-title">{}</span>
                    </div>
                    <div className="user-show-info">
                        <LocationCityIcon className="user-show-icon"/>
                        <span className="user-show-info-title">{}</span>
                    </div>
                </div>
            </div>
            <div className="user-update">
                <span className="user-update-title">Edit</span>
                <form className="user-update-form">
                    <div className="user-update-left">
                        <div className="user-update-item">
                            <label>Username</label>
                            <input type="text" placeholder="{}" className="user-update-input"/>
                        </div>
                        <div className="user-update-item">
                            <label>Full Name</label>
                            <input type="text" placeholder="{}" className="user-update-input"/>
                        </div>
                        <div className="user-update-item">
                            <label>Email</label>
                            <input type="text" placeholder="{}" className="user-update-input"/>
                        </div>
                        <div className="user-update-item">
                            <label>Phone</label>
                            <input type="text" placeholder="{}" className="user-update-input"/>
                        </div>
                        <div className="user-update-item">
                            <label>Address</label>
                            <input type="text" placeholder="{}" className="user-update-input"/>
                        </div>
                    </div>
                    <div className="user-update-right">
                        <div className="user-update-upload">
                            <img className="user-update-img" src="" alt="" />
                            <label htmlFor="file"><PublishIcon className="user-update-icon"/></label>
                            <input type="file" id="file" style={{display:"none"}}></input>
                        </div>
                        <button className="user-update-button">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
