import "./widgetLg.css"
export default function WidgetLg() {
    const Button =({type}) =>{
        return <button className={"widget-lg-button "+type}>{type}</button>
    }
  return (
    <div className="widget-lg">
        <h3 className="widget-lg-title">Latest Transactions</h3>
        <table className="widget-lg-table">
            <tr className="widget-lg-tr">
                <th className="widget-lg-th">Customer</th>
                <th className="widget-lg-th">Date</th>
                <th className="widget-lg-th">Amount</th>
                <th className="widget-lg-th">Status</th>
            </tr>
            <tr className="widget-lg-tr">
                <td className="widget-lg-user">
                <img src="{}" className="widget-lg-img"/>
                <span className="widget-lg-name">{}</span>
                </td>
                <td className="widget-lg-date">
                {}
                </td>
                <td className="widget-lg-amount">
                {}
                </td>
                <td className="widget-lg-status">
                    <Button type="{}"/>
                </td>
            </tr>
        </table>
    </div>
  )
}
