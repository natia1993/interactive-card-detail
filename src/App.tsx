import React, { useState, useRef } from "react";
import "./App.css";
import Container from "./Container";
import CardDetail from "./CardDetail";

function App() {
 const inputDayRef = useRef<HTMLInputElement>(null!);

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [cardError, setCardError] = useState("");
  const [day, setDay] = useState("");
  const [cvc, setCvc] = useState("");
  const [errorMonth, setErrorMonth] = useState("");
  const[errorDay,setErrorDay]=useState("")
  const[cvcError,setCvcError]=useState("")
  const[nameError,setNameError]=useState("")
  const[isCard, setIsCard]=useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const lettersOnly = /^[A-Za-z\s]*$/;
    if (lettersOnly.test(inputValue)) {
      setName(inputValue);
    }
  };
  const resetForm = () => {
  setName("");
  setCardNumber("");
  setMonth("");
  setDay("");
  setCvc("");
  setIsCard(true); // back to form
};
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if(month&&name&&cvc&&day&&cardNumber){
    setIsCard(false)
  }
  

  let hasError = false;

  if (!month) {
    setErrorMonth("can't be blank");
    hasError = true;
    setTimeout(() => {
      setErrorMonth("");
    }, 2000);
  }

  if (!day) {
    setErrorDay("can't be blank");
    hasError = true;
    setTimeout(() => {
      setErrorDay("");
    }, 2000);
  }
  if(!cardNumber){
    setCardError("Can't be blank")
     hasError = true;
    setTimeout(() => {
      setCardError("");
    },2000)
  }
  if(!cvc){
     setCvcError("Can't be blank")
      hasError = true;
    setTimeout(() => {
      setCvcError("");
    },2000)
  }
    if(!name){
     setNameError("Can't be blank")
      hasError = true;
    setTimeout(() => {
      setNameError("");
    },2000)
  }
  

  if (hasError) {
    return;
  }

  console.log("Form submitted");
};



  const onCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let rawInput = event.target.value.replace(/\D/g, "");
    rawInput = rawInput.slice(0, 16);
    const formattedInput = rawInput.replace(/(\d{4})(?=\d)/g, "$1 ");

    if (/[^\d\s]/.test(event.target.value)) {
      setCardError("Wrong format: numbers only");
    } else {
      setCardError("");
    }

    setCardNumber(formattedInput);
  };



   const onMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputMonth = event.target.value;
    console.log(inputMonth)
    // if(inputMonth=="0"){
    //   setErrorMonth("Can't be blank")
    // }else{
    //   setErrorMonth("")
    // }
  
     if (inputMonth.length === 1 && parseInt(inputMonth) <= 9) {
      inputMonth = "0" + inputMonth; // Make it "01", "02", etc.
    }
    if (parseInt(inputMonth) > 9 && inputMonth.length > 2) {
    inputMonth = inputMonth.slice(1); // Removes the first character
  }
    if (parseInt(inputMonth) >= 1 && parseInt(inputMonth) <= 12) {
      setMonth(inputMonth);
    } else {
      // If the input is not a valid month, do not update the state
      setMonth("");
    }
   
  };

  const onDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value.replace(/\D/g, "");
    console.log(input)
    input = input.slice(0, 2);
    setDay(input);
    console.log(input)
  };

  const onCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let val = event.target.value.replace(/\D/g, "");
    setCvc(val.slice(0, 3));
  };

  return (
    <> { isCard ? (
      <Container
        onMonth={onMonth}
        month={month}
        cardError={cardError}
        name={name}
        onChange={handleChange}
        handleSubmit={handleSubmit}
        cardNumber={cardNumber}
        onCardNumberChange={onCardNumberChange}
        day={day}
        onDay={onDay}
        cvc={cvc}
        onCvcChange={onCvcChange}
        errorMonth={errorMonth}
        inputDayRef={inputDayRef}
        errorDay={errorDay}
        cvcError={cvcError}
        nameError={nameError}
      />
    ) : (
      <CardDetail setIsCard={setIsCard} resetForm={resetForm}/>
    )
  }
      

      <div className="main">
        <img src="/images/bg-main-desktop.png" alt="background" />
        {name && <h1 className="text">{name}</h1>}
        {cardNumber && <p className="para">{cardNumber}</p>}
        {month && <span className="month">{month}</span>}
        {day && <span className="year">{day}</span>}
        <img className="card1" src="/images/bg-card-front.png" alt="card front" />
        <img className="card2" src="/images/bg-card-back.png" alt="card back" />
        {cvc&&<span className="cvc">{cvc}</span>}
      </div>
    </>
  );
}

export default App;
