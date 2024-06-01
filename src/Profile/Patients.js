import React from "react";
import './Patients.css';
import { FaSearch } from "react-icons/fa";

export default function Patients() {
  return (
    <>
      <div className="m-item input-d">
            <div className="new-pati">
              <h3>New Patient? Enter Patient Details Here</h3>
              <form action="">
                <div className="p-name">
                  <div className="input-b">
                    <input type="string" id="firstName" placeholder="First Name" required/>
                  </div>
                  <div className="input-b">
                    <input type="string" id="lastName" placeholder="Last Name" required/>
                  </div>
                </div>
                <div className="input-b">
                  <p>Phone Number</p>
                  <input type="phone" id="phone" placeholder="+233 xxx xxxx" required/>
                </div>
                <div className="input-b">
                  <p>Date of Birth</p>
                  <input type="date" id="date" required/>
                </div>
                <div className="p-gender">
                  <p>Gender</p>
                  <span class="_5k_3" data-type="radio" data-name="gender_wrapper" id="u_0_o_ps">
                    <span class="but_pgen">
                      <label class="_58mt" for="u_0_4_YR">Female</label>
                      <input type="radio" class="_8esa" name="sex" value="1" id="u_0_4_YR" />
                    </span>
                    <span class="but_pgen">
                      <label class="_58mt" for="u_0_5_eP">Male</label>
                      <input type="radio" class="_8esa" name="sex" value="2" id="u_0_5_eP" />
                    </span>
                  </span>
                </div>
                <div className="fam-son">
                  <p>Family History of Breast Cancer</p>
                  <textarea id="familyHistory" name="familyHistory" rows="4"></textarea>
                </div>
                <div className="fam-son">
                  <p>Reason for Mammogram</p>
                  <textarea id="reasonForMammogram" name="reasonForMammogram" rows="4" required></textarea>
                </div>
              </form>
            </div>
            <div className="search-pati">
              <form className="nav-s">
                <div>
                  <input type="text" placeholder="Search for patient here" />
                  <button type="submit" className="search"><FaSearch /></button>
                </div>
              </form>
            </div>
          </div>

	  <div className="m-item pat-hist">
            <h3>Patient History</h3>
            <div className="patients">
              <div className="pat-i">
                <article>
                  <h4>Esi Abokomah Annoison</h4>
                  <p>Age: 32</p>
                </article>
                <button>View Details</button>
              </div>
              <div className="pat-i">
                <article>
                  <h4>Abena Serwaa Kyeremanteng</h4>
                  <p>Age: 54</p>
                </article>
                <button>View Details</button>
              </div>
              <div className="pat-i">
                <article>
                  <h4>Selinam Gbetorhor</h4>
                  <p>Age: 27</p>
                </article>
                <button>View Details</button>
              </div>
            </div>
          </div>
    </>
  );
};
