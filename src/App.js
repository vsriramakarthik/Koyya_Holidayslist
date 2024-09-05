import React from "react";
import './App.css'
import './index.css'
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-bold">Holiday List 2024-25</h1>
          <p className="text-gray-700">Total Number of Holidays: 21</p>
          <p className="text-gray-700">Total Number of Effective Holidays: 15</p>
        </header>
        <main>
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Month</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Day</th>
                <th className="px-4 py-2">Occasion</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((holiday, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{holiday.month}</td>
                  <td className="border px-4 py-2">{holiday.date}</td>
                  <td className="border px-4 py-2">{holiday.day}</td>
                  <td className="border px-4 py-2">{holiday.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
        <footer className="text-center mt-8">
          <p>Koyya Enterprises Private Limited</p>
          <p>Registered Office: Wework Salarpuria Magnificia, Tin Factory, 78, Old Madras Road, Bangalore - 560016</p>
          <p>CIN: U62013KA2023PTC179278</p>
          <p>Email: <a href="mailto:contactus@koyya.in" className="text-blue-600">contactus@koyya.in</a></p>
          <p>Website: <a href="https://www.koyya.in" className="text-blue-600">www.koyya.in</a></p>
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
