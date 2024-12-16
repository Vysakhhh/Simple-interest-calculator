import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

function App() {

  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [Interest, setInterest] = useState(0)


  const [isInvalidPrinciple, setIsInvalidPrinciple] = useState(false)
  const [isInvalidInterestRate, setIsInvalidInterestRate] = useState(false)
  const [isInvalidYear, setIsInvalidYear] = useState(false)

  const validRegex = /^[0-9]*.?[0-9]+$/


  const validateInput = (e) => {
    // console.log(e);

    const { name, value } = e.target
    // console.log(name,value);

    if (name == 'amount') {
      setAmount(value)
    }
    else if (name == 'rate') {
      setRate(value)
    }
    else if (name == 'year') {
      setYear(value)
    }

    console.log(amount, rate, year);

    if (validRegex.test(value) || value == "") {
      if (name == 'amount') {
        setIsInvalidPrinciple(false)

      }
      if (name == 'rate') {
        setIsInvalidInterestRate(false)

      }

      if (name == 'year') {
        setIsInvalidYear(false)
      }
    }
    else {

      if (name == 'amount') {
        setIsInvalidPrinciple(true)

      }
      if (name == 'rate') {
        setIsInvalidInterestRate(true)

      }
      if (name == 'year') {
        setIsInvalidYear(true)
      }





    }







  }

  const handleCalculate = (e) => {
    e.preventDefault()

    console.log("simple interest calculator");

    if (amount && rate && year) {

      setInterest((amount * rate * year) / 100)


    }
    else {
      alert("please enter the field completely")
    }


  }
  const handleReset = (e) => {

    setAmount("")
    setRate("")
    setYear("")
    setInterest(0)
    setIsInvalidPrinciple(false) 
    setIsInvalidInterestRate(false)
    setIsInvalidYear(false)
    




  }

  return (
    <>

      <div className="bg-dark d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className='bg-light rounded shadow-lg p-3' style={{ height: "600px", width: "550px" }}>
          <h1 className='title'>Simple Interest Calculator</h1>
          <p className='sub-title '>Calculate Your Simple Interest Easily</p>
          <div className=' interest-btn text-light rounded d-flex  flex-column align-items-center justify-content-center' style={{ height: "130px" }}>
            <h1 style={{ fontSize: "50px" }}> ₹ &nbsp;{Interest}</h1>
            <h1 className='btn-title'>Total Simple Interest</h1>
          </div>
          <form className='m-3'>


            <TextField onChange={validateInput} name='amount' id="amount_text" label="Amount" variant="standard" className='w-100 mb-3' value={amount || ""} />
            {isInvalidPrinciple &&
              <div className='text-danger fw-semibold'>Invalid Principle Amount</div>
            }
            <TextField onChange={validateInput} name='rate' id="rate_text" label="Rate" variant="standard" className='w-100 mb-3'value={rate || ""} />
            {isInvalidInterestRate &&
              <div className='text-danger fw-semibold'>Invalid Interest Rate</div>
            }
            <TextField onChange={validateInput} name='year' id="year_text" label="Year" variant="standard" className='w-100 mb-3' value={year || ""} />

            {isInvalidYear &&
              <div className='text-danger fw-semibold'>Invalid Year</div>
            }
            <Stack className=' my-4 ' direction="row" spacing={3}>
              <Button onClick={handleCalculate} className='bg-dark  w-50' variant="contained" type='submit'>Calculate</Button>
              <Button onClick={handleReset} className='w-50' variant="outlined">Reset</Button>


            </Stack>



          </form>



        </div>
      </div>
    </>
  )
}

export default App
