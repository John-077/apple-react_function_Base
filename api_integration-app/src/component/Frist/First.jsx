import { Link } from "react-router";
import "../css/styles.css";
function First() {
  return (
    <div>
      <section className="iPad-Pro">
        <div className="container">
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">iPad Pro</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <Link to="#">Learn more</Link>
              </li>
              <li>
                <Link to="/">Order</Link>
              </li>
            </ul>
          </div>

          <div className="ipad-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default First;
