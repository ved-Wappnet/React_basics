import "./App.css";
import Car from "./ES6/Car";
import Conditional from "./ES6/Conditional";
import Destructuring from "./ES6/Destructuring";
import Mapmethod from "./ES6/Map";
import Model from "./ES6/Model";
import Formikform from "./Formikform";
import NormalForm from "./Forms/NormalForm";
import UseEffecthook from "./Hooks/UseEffecthook";
import UseReducerhook from "./Hooks/UseReducerhook";
import UseRefhook from "./Hooks/UseRefhook";
import Usestatehook from "./Hooks/Usestatehook";
import Usecallback from "./Hooks/useCallback-hook/Usecallback";
import UseMemo from "./Hooks/useMemo-hook/UseMemo";
import Dashborad from "./Hooks/usecontext-hook/Dashborad";
import { UserProvider } from "./Hooks/usecontext-hook/UserProvider";
import UserRegistration from "./UseForm+Yup/UserRegistration";
import Useform from "./Useform";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Nopage from "./components/Nopage";
import User from "./components/User";
import App2 from "./HOC";
import InputBox from "./components/InputBox";
import useCurrenctInfo from "./customhooks/useCurrency";
import { useState } from "react";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import DemoPrime from "./primereact/Navbar";
import PageChakra from "./ChakraUI/PageChakra";
import MaterialDemo from "./Material-Ui/MaterialDemo";

function App() {
  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];

  const [amount, setamount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrenctInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setamount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      {/* <Car brand="Ford" />
      <Model brand="Ford" model="mustang" />
      <Mapmethod />
      <Destructuring />
      <Useform />
      <Formikform/> */}
      {/* <Conditional/> */}
      {/* <Blog posts={posts}/> */}
      {/* <NormalForm /> */}
      {/* <div style={{ width: "900px", margin: "50px auto" }}>
        <UserRegistration />
      </div> */}

      {/* <Usestatehook /> */}
      {/* <UseEffecthook /> */}
      {/* <UseRefhook /> */}
      {/* <UseReducerhook /> */}

      {/* <UserProvider>
        <Dashborad />
      </UserProvider> */}

      {/* <Usecallback/> */}
      {/* <UseMemo/> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/user/:username" element={<User />} />
          </Route>
        </Routes>
      </Router> */}

      {/* <App2 /> */}
      {/* <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setamount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setamount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <DemoPrime /> 
       <PageChakra /> 
      {/* <MaterialDemo /> */}
    </>
  );
}

export default App;
