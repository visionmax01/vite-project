import React from 'react'

const Experiances = () => {
  return (
    <div className="AcademicDetailsection technicalDetail">
    <h1>Experiances Detail</h1>

      {/* Btech engineering academicDetail */}
    <div className="academicDetail">
      <div className="btechDegree">
        <div className="pointcircle"></div>
          <div className="detailsOverview">
          <h2>BACHELOR DEGREE IN COMPUTER ENGINEERING 'Passed on 2025'</h2>
          <h3><i className="fa-regular fa-star"></i>Rk University Rajkot, Gujrat (School Of Engineering)</h3>
          <p><i className="fa-solid fa-circle"></i>With - 7.2 SGPA</p>
          <p><i className="fa-solid fa-circle"></i>From 2021 - 2025</p>
          </div>
      </div>

      {/* Diploma academicDetail */}
      <div className="btechDegree">
        <div className="pointcircle"></div>
          <div className="detailsOverview">
          <h2>DIPLOMA IN MECHANICAL  'Passed on 2019'</h2>
          <h3><i className="fa-regular fa-star"></i> Shree Ram Mulkh College Of Technical education (Haryana state board of technical education panchkula)</h3>
          <p><i className="fa-solid fa-circle"></i>With - 68%</p>
          <p><i className="fa-solid fa-circle"></i>Major Subject - Designing</p>
          </div>
      </div>


      {/* 10 academicDetail */}
      <div className="btechDegree">
        <div className="pointcircle"></div>
          <div className="detailsOverview">
          <h2>10th 'Passed on 2016'</h2>
          <h3><i className="fa-regular fa-star"></i>Little star higher secondary English boarding school lahan-7 (SEE board Nepal)</h3>
          <p><i className="fa-solid fa-circle"></i>With - 66%</p>
          <p><i className="fa-solid fa-circle"></i>Major Subject - Science</p>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Experiances