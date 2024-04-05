import React from "react";
 // Import CSS file for styling
import './Contact.css';
import murali from "../Assets/images/murali.jpeg"
import sudhindra from "../Assets/images/Sudhindra1.jpeg"
import TableWithTabs from "./Events/TableWithTabs";




const Contact = () => {
  return (
    <>
    <h1 className="text-center text-3xl pt-12 mb-8 text-blue-400 mx-auto">MEET OUR TEAM</h1>
    <br className=""/>

    <div className="overflow-x-auto lg:px-80">
    <table className="table-auto w-full  ">
            <thead>
              <tr className=''>
                <th className="border px-4 py-2">S.NO</th>
                <th className=" border px-4 py-2">NAME</th>
                <th className="border px-4 py-2">ROLE</th>
                <th className="border px-4 py-2">CONTACT NO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1.5">1.</td>
                <td className="border px-2 py-1.5">Dr.V. Madhurima</td>
                <td className="border px-2 py-1.5"> convener</td>
                <td className="border px-2 py-1.5 text-blue-500"><a href='tel: +917661995600'>+91 7661995600</a></td>
              </tr>
              <tr>
                <td className="border px-2 py-1.5">2.</td>
                <td className="border px-2 py-1.5">Dr.G.Guru Mahesh</td>
                <td className="border px-2 py-1.5">convener</td>
                <td className="border px-2 py-1.5 text-blue-500"><a href='tel: +919966214744'>+91 9966214744</a></td>
              </tr>
            </tbody>
          </table></div>
  <TableWithTabs/>

    </>
  );
};

export default Contact;
