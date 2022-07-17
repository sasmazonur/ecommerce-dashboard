import "./featuredInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle"> Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{}</span>
                <span className="featuredMoneyRate">{} <ArrowUpwardIcon className="featuredIcon {}"/></span>
            </div>
            <span className="featuredSub"> Compared Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle"> Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{}</span>
                <span className="featuredMoneyRate">{} <ArrowDownwardIcon className="featuredIcon {}"/></span>
            </div>
            <span className="featuredSub"> Compared Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle"> Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{}</span>
                <span className="featuredMoneyRate">{} <ArrowUpwardIcon className="featuredIcon {}"/></span>
            </div>
            <span className="featuredSub"> Compared Last Month</span>
        </div>
    </div>
  )
}
