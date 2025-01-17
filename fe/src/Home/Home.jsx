import { useEffect, useState } from "react";
import "../css/pages/home.css"
import { Link } from "react-router-dom";
import api from "../utils/api";
import { Circles } from "react-loader-spinner";


function Home() {
  const [progress, setProgress] = useState(30);
  const [loading, setLoading] = useState(true);
  const [donationList, setDonationList] = useState([
    {
      amount: "269,420.69",
      name: "Alec Celestin",
      date: "01 / 08 / 2025"
    }
  ]);

  const fetchDonations = async () => {
    try {
        const response = await api.get('/donations');
        setDonationList(response.data);
    } catch (error) {
        console.error('Error fetching donations:', error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);
 
  return (
      <main className="main">
        <section className="details-outer">
          <h1 className="details-heading">
            LOS ANGELES IS ON FIRE. <br />WE NEED YOUR HELP.
          </h1>
          <div className="details-texts-outer">
            <p>
              <span
                >The Lineo Rescue Fund exists for one reason: to act when others
                can’t.
              </span>
            </p>
            <p>
              In the face of devastating fires in Los Angeles, we’re stepping in
              where the need is greatest — to <span>evacuate</span>,
              <span>protect</span>, and rebuild.
            </p>
            <p>
              This mission isn’t just urgent; it’s historic. We are mobilizing
              unprecedented resources to rescue the most vulnerable: women,
              children, the elderly, and those trapped in danger zones.
            </p>
            <p>
              Our boots hit the ground Thursday afternoon, deploying to new
              hotspots and danger zones where help is limited. This isn’t just a
              rescue operation; it’s a movement of justice, peace, and love in
              action.
            </p>
            <h3 className="details-sub-headings">Our Values</h3>
            <p>
              At the heart of Lineo Rescue are the principles that guide
              everything we do:
            </p>
            <ul>
              <li>
                <strong>Justice, Peace, Love:</strong>Every life matters, and
                every action is grounded in compassion.
              </li>
              <li>
                <strong>Speed, Stability, Security:</strong>Rapid response is
                critical, but so is creating lasting safety and support.
              </li>
              <li>
                <strong>Focus on the Vulnerable: </strong>Women, children, and the
                elderly come first.
              </li>
            </ul>

            <h3 className="details-sub-headings">How We Allocate Resources</h3>
            <p>
              Your donations save lives. Here’s how every dollar contributes to
              making an impact:
            </p>
            <ol>
              <li>
                <strong>Emergency Evacuations</strong>
                <ul>
                  <li>
                    Helping retirement homes, disabled individuals, and families
                    escape danger zones.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Search & Rescue Teams</strong>
                <ul>
                  <li>
                    Deploying professionals and volunteers to areas most in need.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Critical Supplies</strong>
                <ul>
                  <li>
                    Food, water, shelter, and medical care for displaced
                    individuals.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Rebuilding Communities</strong>
                <ul>
                  <li>
                    Funding long-term recovery for homes, schools, and
                    infrastructure destroyed by the fires.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Environmental Recovery</strong>
                <ul>
                  <li>
                    Initiatives to prevent future devastation, including
                    reforestation and fire-prevention programs.
                  </li>
                </ul>
              </li>
            </ol>

            <h3 className="details-sub-headings">Join the Movement</h3>
            <p>
              This isn’t just a fundraiser—it’s a revolution of care and courage.
              The Lineo Rescue Fund is raising billions to rebuild lives and give
              Los Angeles a future worth fighting for. Be a part of history.
              Donate now to save lives, spread hope, and make an impact the world
              will never forget.
            </p>
          </div>
          <Link className="button-filled" to="/donate-now">Donate now</Link>
        </section>
        <section className="donation-outer">
          <h1>Current Donations</h1>
          {loading?
            <Circles width={30} />
          :
          <div className="donation-lists-outer">
            {donationList?.map((donation, index)=>{
              return(
                <div key={index} className="donation-list-outer">
                  <p className="donation-list-price">${donation.amount}</p>
                  <p className="donation-list-name">{donation.name}</p>
                  <p className="donation-list-date">{donation.date}</p>
                </div>
              )
            })}
          </div>
          }
        </section>
      </main>
  )
}

export default Home;
