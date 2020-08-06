import React from "react";
import data from "../data/mobiledata.json";
import { Link } from "react-router-dom";
import "../App.css";
const Mobile = () => {
  const Mob_details = data.profile;
  console.log(Mob_details);

  return (
    <div className="row justify-content-center">
      {Mob_details.map((values, index) => (
        <section className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
          <div className="card ">
            <article className="card-body">
              <img
                src={values.details.image}
                alt="profileimage"
                width="150px"
                height="150px"
              ></img>
              <p>{values.details["mobile-name"]}</p>
              <Link
                to={{ pathname: "/details", data2: { id: index } }}
                className="btn"
              >
                View details
              </Link>
            </article>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Mobile;
