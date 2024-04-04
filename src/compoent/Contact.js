import React from "react";
 // Import CSS file for styling
import './Contact.css';
import murali from "../Assets/images/murali.jpeg"
import sudhindra from "../Assets/images/Sudhindra1.jpeg"
const Contact = () => {
  return (
    <>
      {/*<div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
         
            <div class="mb-10 md:mb-16">
              <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet our Team</h2>

              
            </div>
            

            <div class="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
         
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-40 md:w-32">
                  <img  alt=" by Radu Florin" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Praveen</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Coordinator</p>
                </div>
              </div>
             
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-38 md:w-32 ">
                  <img src={murali}   alt=" by christian ferrer" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">DJ Murali Mahes</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Website Designer</p>
                </div>
              </div>
          
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-40 md:w-32">
                  <img src={sudhindra}   alt=" by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">KKM Sudhindra</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Website Designer</p>
                </div>
              </div>
          
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-40 md:w-32">
                  <img src={process.env.PUBLIC_URL + '/images/praveen.jpg'}   alt=" by Midas Hofstra" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Robert Greyson</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Creative Director</p>
                </div>
              </div>
             
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
                  <img src={process.env.PUBLIC_URL + '/images/praveen.jpg'}   alt=" by Elizeu Dias" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">John Roberts</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Investor Relations</p>
                </div>
              </div>
       
              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                <div class="h-30 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
                  <img src={process.env.PUBLIC_URL + '/images/praveen.jpg'}   alt=" by Matheus Ferrero" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Judy Amandez</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">Senior Art Director</p>
                </div>
              </div>
              
            </div>
          </div>
  </div>*/}

<div class="overflow-x-auto mb-8 md:w-1/2 md:pr-4 mx-auto">
    <h2 class="text-center text-xl font-bold mb-4">Faculty I/Cs for SPARK Technical Events
</h2>
    <table class="table-auto min-w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">S.No</th>
          <th class="px-4 py-2">Dept</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">1</td>
          <td class="border px-4 py-2"> EEE</td>
          <td class="border px-4 py-2">Dr.A.Sudhakar</td>
          <td class="border px-4 py-2"><a href="tel:+917013676252" class="text-blue-500">+91 7013676252</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">2</td>
          <td class="border px-4 py-2">ECE</td>
          <td class="border px-4 py-2">Dr B Shobhan Babu</td>
          <td class="border px-4 py-2"><a href="tel:+919440483373" class="text-blue-500">+91 9440483373</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">3</td>
          <td class="border px-4 py-2">CSE</td>
          <td class="border px-4 py-2">Dr.S.Sajida</td>
          <td class="border px-4 py-2"><a href="tel:+917893337513
" class="text-blue-500">+91 7893337513
</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">4</td>
          <td class="border px-4 py-2">CSA</td>
          <td class="border px-4 py-2">S. Mrudula
</td>
          <td class="border px-4 py-2"><a href="tel:+919703064154
" class="text-blue-500">+91 9703064154
</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">5</td>
          <td class="border px-4 py-2">IT</td>
          <td class="border px-4 py-2">Dr P Jaya Prakash
</td>
          <td class="border px-4 py-2"><a href="tel:+919908876781
" class="text-blue-500">+91 9908876781
</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">6</td>
          <td class="border px-4 py-2">MECH</td>
          <td class="border px-4 py-2">Dr. N. Rajesh</td>
          <td class="border px-4 py-2"><a href="tel:+919985289928
" class="text-blue-500">+91 9985289928
</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">7</td>
          <td class="border px-4 py-2">CIVIL</td>
          <td class="border px-4 py-2">V MAHESH
</td>
          <td class="border px-4 py-2"><a href="tel:+919652963387
" class="text-blue-500">+91 9652963387
</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">8</td>
          <td class="border px-4 py-2">MBA</td>
          <td class="border px-4 py-2">Dr.Nalla Bala Kalyan</td>
          <td class="border px-4 py-2"><a href="tel:+919573068980
" class="text-blue-500">+91 9573068980
</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">9</td>
          <td class="border px-4 py-2">MCA</td>
          <td class="border px-4 py-2">K.Sreedevi
</td>
          <td class="border px-4 py-2"><a href="tel:+918074682544
" class="text-blue-500">+91 8074682544
</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">10</td>
          <td class="border px-4 py-2">Maths</td>
          <td class="border px-4 py-2">Dr.K.Ananth Kumar
</td>
          <td class="border px-4 py-2"><a href="tel:+919000028875" class="text-blue-500">+91 9000028875</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">11</td>
          <td class="border px-4 py-2">Phy & Chemistry</td>
          <td class="border px-4 py-2">Dr.P.Geetha
</td>
          <td class="border px-4 py-2"><a href="tel:+918985909409
" class="text-blue-500">+91 8985909409
</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">12</td>
          <td class="border px-4 py-2">English</td>
          <td class="border px-4 py-2">Dr. Kalyan Kumar
</td>
          <td class="border px-4 py-2"><a href="tel:+919573143709" class="text-blue-500">+91 9573143709</a></td>
        </tr>

      </tbody>
    </table>
  </div>

  <div class="overflow-x-auto mb-8 md:w-1/3 md:pr-4 mx-auto">
    <h2 class="text-center text-xl font-bold mb-4">Event Co ordinators</h2>
    <table class="table-auto min-w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">Event Name</th>
          <th class="px-4 py-2">Coordinator's Name</th>
          <th class="px-4 py-2">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">Event 1</td>
          <td class="border px-4 py-2">John Doe</td>
          <td class="border px-4 py-2"><a href="tel:+919039086072" class="text-blue-500">+91 9039086072</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Event 2</td>
          <td class="border px-4 py-2">Jane Smith</td>
          <td class="border px-4 py-2"><a href="tel:+919039086073" class="text-blue-500">+91 9039086073</a></td>
        </tr>

      </tbody>
    </table>
  </div>

        <div class="flex flex-col md:flex-row">
  <div class="overflow-x-auto mb-8 md:w-1/3 md:pr-4">
    <h2 class="text-center text-xl font-bold mb-4">Technical Event</h2>
    <table class="table-auto min-w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">Event Name</th>
          <th class="px-4 py-2">Coordinator's Name</th>
          <th class="px-4 py-2">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">Event 1</td>
          <td class="border px-4 py-2">John Doe</td>
          <td class="border px-4 py-2"><a href="tel:+919039086072" class="text-blue-500">+91 9039086072</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Event 2</td>
          <td class="border px-4 py-2">Jane Smith</td>
          <td class="border px-4 py-2"><a href="tel:+919039086073" class="text-blue-500">+91 9039086073</a></td>
        </tr>

      </tbody>
    </table>
  </div>
  <div class="overflow-x-auto mb-8 md:w-1/3 md:px-2">
    <h2 class="text-center text-xl font-bold mb-4">Non Technical Event</h2>
    <table class="table-auto min-w-full">
    <thead>
        <tr>
          <th class="px-4 py-2">Event Name</th>
          <th class="px-4 py-2">Coordinator's Name</th>
          <th class="px-4 py-2">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">Event 1</td>
          <td class="border px-4 py-2">John Doe</td>
          <td class="border px-4 py-2"><a href="tel:+919039086072" class="text-blue-500">+91 9039086072</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Event 2</td>
          <td class="border px-4 py-2">Jane Smith</td>
          <td class="border px-4 py-2"><a href="tel:+919039086073" class="text-blue-500">+91 9039086073</a></td>
        </tr>

      </tbody>

    </table>
  </div>
  <div class="overflow-x-auto mb-8 md:w-1/3 md:pl-4">
    <h2 class="text-center text-xl font-bold mb-4">Spot Event</h2>
    <table class="table-auto min-w-full">
    <thead>
        <tr>
          <th class="px-4 py-2">Event Name</th>
          <th class="px-4 py-2">Coordinator's Name</th>
          <th class="px-4 py-2">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2">Event 1</td>
          <td class="border px-4 py-2">John Doe</td>
          <td class="border px-4 py-2"><a href="tel:+919039086072" class="text-blue-500">+91 9039086072</a></td>
        </tr>
        <tr>
          <td class="border px-4 py-2">Event 2</td>
          <td class="border px-4 py-2">Jane Smith</td>
          <td class="border px-4 py-2"><a href="tel:+919039086073" class="text-blue-500">+91 9039086073</a></td>
        </tr>

      </tbody>

    </table>
  </div>
</div>

    </>
  );
};

export default Contact;
