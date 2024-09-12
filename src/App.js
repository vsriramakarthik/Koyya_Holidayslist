import React from "react";
import './App.css'
import './index.css'
import Background from './bg.png'; 
import GirlImage from './girl.png'; 
import Head from './head.png'
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 w-100">
      <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg">
      <img src={Head} alt="Head"  />
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Holiday List</h1>
          <h1 className="text-2xl font-bold">2024-25</h1>
        </header>
        <main>
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Month</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Day</th>
                <th className="border px-4 py-2">Occasion</th>
              </tr>
            </thead>
            {
            <tbody>
         {holidays.map((holiday, index) => (
       <tr 
      key={index} 
      className={`${
        holiday.day === 'Saturday' || holiday.day === 'Sunday' ? 'text-gray-500' : ''
      }`}
    >
      <td className="border px-4 py-2 text-center">{index + 1}</td>
      <td className="border px-4 py-2 text-center">{holiday.month}</td>
      <td className="border px-4 py-2 text-center">{holiday.date}</td>
      <td className="border px-4 py-2 text-center">{holiday.day}</td>
      <td className="border px-4 py-2 text-center">{holiday.occasion}</td>
    </tr>
  ))}
</tbody>
}

          </table>
          <p className="text-black-700 font-bold pl-10">Total Number of Holidays: 21</p>
          <p className="text-black-700 font-bold pl-10">Total Number of Effective Holidays: 15</p>
          <br />
          <br />
        </main>
      
    <footer
      className="relative bg-cover bg-center text-white h-32"
      
       style={{ backgroundImage: `url(${Background})` }}
        
      
      >
      <div className="justify-start absolute inset-0 flex items-end">
        <div className="w-3/4 bg-opacity-50 p-4 flex items-center ">
         <img src={GirlImage} alt="Girl" className=" w-6  md:h-10 lg:h-40 md:w-48 lg:w-10" />
          <div className="text-left mx-4 pt-24 h-45 text-sm">
            <p className="font-bold text-lg">Koyya Enterprises Private Limited</p>
            <p>
              Registered Office: Wework Salarpuria Magnificia, Tin Factory, 78,
              Old Madras Road, Bangalore - 560016
            </p>
            <p>CIN: U62013KA2023PTC179278</p>
            <p>
              <a href="mailto:contactus@koyya.in" className="underline">
                contactus@koyya.in
              </a>{' '}
              |{' '}
              <a href="https://www.koyya.in" className="underline">
                https://www.koyya.in
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="h-52"></div> 
    </footer>
      </div>
    </div>
  );
}

const holidays = [
  { month: "April", date: "9", day: "Tuesday", occasion: "Ugadi" },
  { month: "April", date: "10", day: "Wednesday", occasion: "Ramadan" },
  { month: "April", date: "14", day: "Sunday", occasion: "Ambedkar Jayanthi" },
  { month: "May", date: "1", day: "Wednesday", occasion: "May Day" },
  { month: "August", date: "15", day: "Thursday", occasion: "Independence Day" },
  { month: "September", date: "7", day: "Saturday", occasion: "Vinayaka Chavithi" },
  { month: "October", date: "12", day: "Saturday", occasion: "Mahanavami" },
  { month: "October", date: "13", day: "Sunday", occasion: "Vijayadashami" },
  { month: "October", date: "2", day: "Wednesday", occasion: "Gandhi Jayanthi" },
  { month: "October", date: "30", day: "Wednesday", occasion: "Naraka Chathurdhashi" },
  { month: "October", date: "31", day: "Thursday", occasion: "Deepavali" },
  { month: "November", date: "1", day: "Friday", occasion: "Kannada Rajyotsava" },
  { month: "December", date: "25", day: "Wednesday", occasion: "Christmas" },
  { month: "January", date: "1", day: "Wednesday", occasion: "New Year Day" },
  { month: "January", date: "13", day: "Monday", occasion: "Bhogi" },
  { month: "January", date: "14", day: "Tuesday", occasion: "Makarasankranthi" },
  { month: "January", date: "15", day: "Wednesday", occasion: "Kanuma" },
  { month: "January", date: "26", day: "Sunday", occasion: "Republic Day" },
  { month: "February", date: "26", day: "Wednesday", occasion: "Mahashivarathri" },
  { month: "March", date: "30", day: "Sunday", occasion: "Ugadi" },
  { month: "March", date: "31", day: "Monday", occasion: "Ramadan" },
];

export default App;
