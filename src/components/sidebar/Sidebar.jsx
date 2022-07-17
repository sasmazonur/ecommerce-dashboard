import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import {Link} from "react-router-dom";
export default function sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">

                    <li className="sidebarItem active">
                        <LineStyleIcon className="sidebarIcon"/>
                        Home
                    </li>
                    </Link>
                    <li className="sidebarItem">
                        <TimelineIcon className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarItem">
                        <TrendingUpIcon className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                    <li className="sidebarItem">
                        <PersonIcon/>
                        Users
                    </li>
                    </Link>
                    <Link to="/products" className="link">
                    <li className="sidebarItem">
                        <StorefrontIcon/>
                        Products
                    </li>
                    </Link>
                    <li className="sidebarItem">
                        <AttachMoneyIcon/>
                        Transactions
                    </li>
                    <li className="sidebarItem">
                        <BarChartIcon/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <EmailIcon/>
                        Mail
                    </li>
                    <li className="sidebarItem">
                        <DynamicFeedIcon/>
                        Feedback
                    </li>
                    <li className="sidebarItem">
                        <MessageIcon/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff </h3>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <WorkIcon/>
                        Manage
                    </li>
                    <li className="sidebarItem">
                        <TimelineIcon/>
                        Analytics
                    </li>
                    <li className="sidebarItem">
                        <ReportIcon/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
