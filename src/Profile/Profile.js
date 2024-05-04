import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaSearch } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="App-profile">
        <div className="item-v">
	  <article className="prof-info">
	    <img className="prof-pic" src={require("../assets/pk_photo.jpg")} 
	      alt="Dr. Paa Kojo Effah Annan picture" width="150" height="150" />
	    <h4>Paa Kojo Effah Annan, MD</h4>
	    <p>Senior Oncologist</p>
	    <p>Effia-Nkwanta Regional Hospital</p>
	  </article>
        </div>
        <div className="main-v">
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
	        <h3>Search For Patient Here</h3>
	        <div>
	          <input type="text" placeholder="Search.." />
	          <button type="submit" className="search"><FaSearch /></button>
	        </div>
	      </form>
	    </div>
	  </div>
	  <div className="m-item submit-mammo">
	    <form action="upload.php" method="post" enctype="multipart/form-data">
               <h3>Upload Mammogram</h3>
               <input type="file" accept="image/*" name="fileToUpload" id="fileToUpload" />
               <input type="submit" value="Analyse Mammogram" name="submit" />
            </form>
	  </div>
	  <div className="m-item ana-r">
	    <h3>Analysis Results</h3>
	    <p>Analysis Outcome: Normal</p>
	    <p>Recommendations: Regular</p>
	    <p>Next Steps: Follow up in 8 months</p>
	  </div>
	  <div className="m-item print-r">
	    <h3>Print Results</h3>
	    <button>Print</button>
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
        </div>
      </div>
      <Footer />
    </>
  )
};
