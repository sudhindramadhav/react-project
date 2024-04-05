import React, { useState } from 'react';
import "../Contact.css"
const TableWithTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const renderTable = (tabIndex) => {
    switch (tabIndex) {
      case 1:
        return (
          
     <table className="w-full">
     <thead>
         <tr>
             <th className="border px-2 py-1.5">S.NO</th>
             <th className="border px-2 py-1.5">NAME</th>
             <th className="border px-2 py-1.5">ROLE</th>
             <th className="border px-2 py-1.5">CONTACT NO</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td className="border px-2 py-1.5">1</td>
             <td className="border px-2 py-1.5">S.DHANUSH KUMAR</td>
             <td className="border px-2 py-1.5">Event Lead</td>
             <td className="border px-2 py-1.5">
               <a href="tel:+918247507214" className="text-blue-500">+91 8247507214</a>
             </td>
         </tr>
         <tr>
             <td className="border px-2 py-1.5">2</td>
             <td className="border px-2 py-1.5">G.PRAVEEN KUMAR</td>
             <td className="border px-2 py-1.5">Event Lead</td>
             <td className="border px-2 py-1.5">
               <a href="tel:+919346068631" className="text-blue-500">+91 9346068631</a>
             </td>
         </tr>
         <tr>
             <td className="border px-2 py-1.5">3</td>
             <td className="border px-2 py-1.5">V.SAI SUBHASH</td>
             <td className="border px-2 py-1.5">Technical Lead</td>
             <td className="border px-2 py-1.5">
               <a href="tel:+918179537456" className="text-blue-500">+91 8179537456</a>
             </td>
         </tr>
         <tr>
             <td className="border px-2 py-1.5">8</td>
             <td className="border px-2 py-1.5">T.TARUN KUMAR</td>
             <td className="border px-2 py-1.5">Technical Lead</td>
             <td className="border px-2 py-1.5">
               <a href="tel:+919989586692" className="text-blue-500">+91 9989586692</a>
             </td>
           </tr>
         <tr>
             <td className="border px-2 py-1.5">4</td>
             <td className="border px-2 py-1.5">V.M.NEHA</td>
             <td className="border px-2 py-1.5"> cultural Lead</td>
             <td className="border px-2 py-1.5">
               <a href="tel:+916305820977" className="text-blue-500">+91 6305820977</a>
             </td>
         </tr>
         <tr>
             <td className="border px-2 py-1.5">5</td>
             <td className="border px-2 py-1.5">K.JAYAVARDHAN</td>
             <td className="border px-2 py-1.5">cultural Lead</td>
             <td className="border px-2 py-1.5">
               <a href="tel:+919652775305" className="text-blue-500">+91 9652775305</a>
             </td>
         </tr>
         <tr>
             <td className="border px-2 py-1.5">6</td>
             <td className="border px-2 py-1.5">K.CHARAN TEJA</td>
             <td className="border px-2 py-1.5">Spot Events Organiser</td>
             <td className="border px-2 py-1.5">
               <a href="tel:+919704579985" className="text-blue-500">+91 9704579985</a>
             </td>
           </tr>
           <tr>
             <td className="border px-2 py-1.5">7</td>
             <td className="border px-2 py-1.5">J.BALA SWAROOP </td>
             <td className="border px-2 py-1.5">Spot Events Organiser</td>
             <td className="border px-2 py-1.5">
               <a href="tel:+917680949491" className="text-blue-500">+91 7680949491</a>
             </td>
           </tr>
           
         </tbody>
       </table>
        );
      case 2:
        return (
          <table className="table-auto  w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">S.No</th>
              <th className="border px-4 py-2">DEPARTMENT</th>
              <th className="border px-4 py-2">NAME</th>
              <th className="border px-4 py-2">CONTACT NO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1.5">1</td>
              <td className="border px-2 py-1.5"> EEE</td>
              <td className="border px-2 py-1.5">Dr.A.Sudhakar</td>
              <td className="border px-2 py-1.5"><a href="tel:+917013676252" className="text-blue-500">+91 7013676252</a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">2</td>
              <td className="border px-2 py-1.5">ECE</td>
              <td className="border px-2 py-1.5">Dr B Shobhan Babu</td>
              <td className="border px-2 py-1.5"><a href="tel:+919440483373" className="text-blue-500">+91 9440483373</a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">3</td>
              <td className="border px-2 py-1.5">CSE</td>
              <td className="border px-2 py-1.5">Dr.S.Sajida</td>
              <td className="border px-2 py-1.5"><a href="tel:+917893337513
    " className="text-blue-500">+91 7893337513
    </a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">4</td>
              <td className="border px-2 py-1.5">CSA</td>
              <td className="border px-2 py-1.5">S. Mrudula
    </td>
              <td className="border px-2 py-1.5"><a href="tel:+919703064154
    " className="text-blue-500">+91 9703064154
    </a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">5</td>
              <td className="border px-2 py-1.5">IT</td>
              <td className="border px-2 py-1.5">Dr P Jaya Prakash
    </td>
              <td className="border px-2 py-1.5"><a href="tel:+919908876781
    " className="text-blue-500">+91 9908876781
    </a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">6</td>
              <td className="border px-2 py-1.5">MECH</td>
              <td className="border px-2 py-1.5">Dr. N. Rajesh</td>
              <td className="border px-2 py-1.5"><a href="tel:+919985289928
    " className="text-blue-500">+91 9985289928
    </a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">7</td>
              <td className="border px-2 py-1.5">CIVIL</td>
              <td className="border px-2 py-1.5">V MAHESH
    </td>
              <td className="border px-2 py-1.5"><a href="tel:+919652963387
    " className="text-blue-500">+91 9652963387
    </a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">8</td>
              <td className="border px-2 py-1.5">MBA</td>
              <td className="border px-2 py-1.5">Dr.Nalla Bala Kalyan</td>
              <td className="border px-2 py-1.5"><a href="tel:+919573068980
    " className="text-blue-500">+91 9573068980
    </a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">9</td>
              <td className="border px-2 py-1.5">MCA</td>
              <td className="border px-2 py-1.5">K.Sreedevi
    </td>
              <td className="border px-2 py-1.5"><a href="tel:+918074682544
    " className="text-blue-500">+91 8074682544
    </a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">10</td>
              <td className="border px-2 py-1.5">Maths</td>
              <td className="border px-2 py-1.5">Dr.K.Ananth Kumar
    </td>
              <td className="border px-2 py-1.5"><a href="tel:+919000028875" className="text-blue-500">+91 9000028875</a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">11</td>
              <td className="border px-2 py-1.5">Phy & Chemistry</td>
              <td className="border px-2 py-1.5">Dr.P.Geetha
    </td>
              <td className="border px-2 py-1.5"><a href="tel:+918985909409
    " className="text-blue-500">+91 8985909409
    </a></td>
            </tr>
            <tr>
              <td className="border px-2 py-1.5">12</td>
              <td className="border px-2 py-1.5">English</td>
              <td className="border px-2 py-1.5">Dr. Kalyan Kumar
    </td>
              <td className="border px-2 py-1.5"><a href="tel:+919573143709" className="text-blue-500">+91 9573143709</a></td>
            </tr>
    
          </tbody>
        </table>
        );
      case 3:
        return (
          <table className="table-auto w-full mb-20">
            <thead>
              <tr className=''>
                <th className="border px-4 py-2">S.NO</th>
                <th className=" border px-4 py-2">NAME</th>
                <th className=" border px-4 py-2">ROLE</th>
                <th className="border px-4 py-2" >LINKEDIN</th>
                <th className="border px-4 py-2">CONTACT NO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1.5">1.</td>
                <td className="border px-2 py-1.5">DJ Murali Mahesh</td>
                <td className="border px-2 py-1.5"> UX/UI & Development</td>
                <td className="border px-2 py-1.5 text-blue-500" ><a href='https://www.linkedin.com/in/murali-mahesh-dj'>
                LinkedIn</a></td>
                <td className="border px-2 py-1.5 text-blue-500"><a href='tel: +91900057023'>+91 9000570223</a></td>
              </tr>
              <tr>
                <td className="border px-2 py-1.5">2.</td>
                <td className="border px-2 py-1.5">KKM Sudhindra</td>
                <td className="border px-2 py-1.5">Development & Hosting</td>
                <td className="border px-2 py-1.5 text-blue-500"><a href='https://www.linkedin.com/in/kkmsudhindra50900023'>
                LinkedIn</a></td>
                <td className="border px-2 py-1.5 text-blue-500"><a href='tel: +919039086072'>+91 9039086072</a></td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="flex flex-col items-center">
        <div className="flex justify-between border-b border-blue-200  mb-4">
          <button
            className={`px-2 py-2 focus:outline-none ${
              activeTab === 1 ? 'bg-blue-200' : ''
            }`}
            onClick={() => handleTabClick(1)}
          >
            Event Co-Ordinators
          </button>
          <button
            className={`px-2 py-2 focus:outline-none ${
              activeTab === 2 ? 'bg-blue-200' : ''
            }`}
            onClick={() => handleTabClick(2)}
          >
            Faculty Incharge
          </button>
          <button
            className={`px-2 py-2 focus:outline-none ${
              activeTab === 3 ? 'bg-blue-200' : ''
            }`}
            onClick={() => handleTabClick(3)}
          >
            Website Designing
          </button>
        </div>
        <div className='overflow-x-auto w-full md:px-80'>{renderTable(activeTab)}</div>
      </div>
    </div>
  );
};

export default TableWithTabs;
