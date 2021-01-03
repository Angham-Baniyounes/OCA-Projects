import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./BurgerListHome.css";

function BurgerListHome() {
  return (
    <section className="header-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="beef-burger">
              <p className="list-only">
                {" "}
                <i>Only the best</i>{" "}
              </p>
              <h3 className="list-header">BURGERS & SIDES</h3>
              <p className="list-paragraph">
                Our menu ranges from your old school <br /> to some mind-blowing
                custom burgers and sides
              </p>{" "}
              <br />
              <div>
                <p>
                Turkey Burger{" "}
                  <span className="list-price">5.99 JOD</span>
                </p>
                <p>
                Italian Burger{" "}
                  <span className="list-price">4.99 JOD</span>
                </p>
                <p>
                American Burger <span className="list-price">2.99 JOD</span>
                </p>
                <p>
                Beef burger{" "}
                  <span className="list-price">3.49 JOD</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BurgerListHome;
