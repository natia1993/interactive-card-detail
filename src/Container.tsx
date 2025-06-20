import React from "react";
import "./container.css";

interface ContainerProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cardError: string;
  cardNumber: string;
  onCardNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  month: string;
  onMonth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  day: string;
  onDay: (event: React.ChangeEvent<HTMLInputElement>) => void;
  cvc: string;
  onCvcChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMonth: string;
  inputDayRef: React.RefObject<HTMLInputElement>;
  errorDay:string;
  cvcError:string;
  nameError:string;
}


const Container: React.FC<ContainerProps> = ({
  name,
  onChange,
  cardNumber,
  onCardNumberChange,
  handleSubmit,
  cardError,
  month,
  onMonth,
  day,
  onDay,
  cvc,
  onCvcChange,
  errorMonth,
  inputDayRef,
  errorDay,
  cvcError,
  nameError
}) => {
     
    return (
    <form onSubmit={handleSubmit} className="container">
      <div className="box">
        <label htmlFor="cardholder-name">Cardholder Name</label>
        <input className={nameError?"input-name-error":""}
          id="cardholder-name"
          type="text"
          value={name}
          onChange={onChange}
          placeholder="e.g. John Doe"
          pattern="[A-Za-z\s]*"
          title="Only letters are allowed"
          aria-label="Cardholder Name"
        />
         {nameError && <span className="error-text">{nameError}</span>}
      </div>

      <div className="box">
        <label htmlFor="card-number">Card Number</label>
        <input  className={cardError ? "error-input" : ""}
          id="card-number"
          type="text"
          value={cardNumber}
          onChange={onCardNumberChange}
          placeholder="e.g. 1234 5678 9012 3456"
          pattern="[\d\s]{19}" // Allows exactly 19 characters (16 digits + 3 spaces)

          title="შეიყვანეთ ზუსტად 16 ციფრი"
         
          // aria-label="Card Number"
        />
        {cardError && <span className="error-text">{cardError}</span>}
      </div>

      <div className="input-box">
        <div>
          <label htmlFor="exp-mm">Exp. Date (MM/YY)</label>
          <div className="input1">
            <div className="input-group">
            <input className={errorMonth?"input-error-month":""}
              id="exp-mm"
              type="text"
              placeholder="MM"
              value={month}
              onChange={onMonth}
              pattern="(0[1-9]|1[0-2])"
              title="Month must be between 01 and 12"
              aria-label="Expiration Month"
              style={{ textAlign: "center" }}
              
            />
            {errorMonth && <span className="error" style={{ color: "red" }}>{errorMonth}</span>}
            </div>
            <div className="input-group">
             
            <input  className={errorDay ? "input-day-error" : ""}
              id="exp-dd"
              type="text"
              placeholder="YY"
              ref={inputDayRef}
              value={day}
              maxLength={2}
              onChange={onDay}
               pattern="\d{2}"
              title="შეიყვანე ზუსტად ორი ციფრი"
              aria-label="Expiration Year"
            />
           {errorDay && <span className="error"  style={{ color: "red" }}>{errorDay}</span>} 
           </div>
        </div>
          </div>
          

        <div  className="input-group input2">
          <label htmlFor="cvc">CVC</label>
          <input  className={cvcError?"input-error-cvc":""}
            id="cvc"
            type="text"
            placeholder="e.g. 123"
            value={cvc}
            onChange={onCvcChange}
            pattern="\d{3}"
            title="CVC must be 3 digits"
            aria-label="CVC"
          />
         {cvcError && <span className="error"  style={{ color: "red" }}>{cvcError}</span>} 
        </div>
      </div>

      <button className="button" type="submit">
        Confirm
      </button>
    </form>
  );
};

export default Container;
