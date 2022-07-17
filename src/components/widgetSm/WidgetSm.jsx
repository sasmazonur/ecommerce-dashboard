import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className="widget-sm">
        <span className="widget-sm-title">
            New Join Members
        </span>
        <ul className="widget-sm-list">
            <li className="widget-sm-list-item">
                <img src="" className="widget-sm-img"/>
                <div className="widget-sm-user">
                    <span className="widget-sm-username">{}</span>
                    <span className="widget-sm-usertitle">{}</span>
                </div>
                <button className="widget-sm-button">
                    <VisibilityIcon className="widget-sm-icon"/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
