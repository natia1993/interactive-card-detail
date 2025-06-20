
import "./carddetail.css"

import sign from "../public/images/icon-complete.svg"
interface CardDetailProps {
  setIsCard: (value: boolean) => void;
    resetForm: () => void;
}

export default function CardDetail({ setIsCard , resetForm }: CardDetailProps) {

  return (
    <>
    <div className="items">
    <div>
    <img src={sign} />
    </div>
    <div>
      <h1>THANK YOU!</h1>
      <p>We’ve added your card details</p>
    </div>
    <button onClick={()=>{setIsCard(true)
                  resetForm()
    }}>Continue</button>
    </div>
    
    </>
  )
}
