
import arr from "./data.json"

function App() {
  const data = arr


  return (
    <>
      <div className='h-full w-full bg-black/90 text-white p-5'>

        {data.map((item, index) => {
          return (
            <>
              {/* image */}

              <div className="bg-black/40 flex mb-5 py-8 px-8 rounded-3xl gap-48 items-center hover:bg-black/15">
                <div>
                  <img className="w-40" key={index} src={item.image} alt="" />

                </div>




                {/* details */}
                <div key={index}>

                  <h1>{item.title}</h1>
                  <h1>{item.rating}{item.reviews}</h1>

                  <p>
                    {
                      item.details.map((li,i) => {
                        return (
                          <>
                            <li key={i}>{li}</li>
                          </>
                        )
                      })
                    }

                  </p>
                

                      <p  className="text-green-500" key={index}>{item.offers.exchangeOffer}</p>
                      <p className="text-green-500" key={index}>{item.offers.bankOffer}</p>
                    
                 


                </div>

                {/*      
      

      {/* pricing */}
                <div className=" mb-2 text-center" key={index}>

                  <h1 className="text-green-400 text-2xl text-center">{item.price}</h1>
                  <p className="line-through">{item.originalPrice}</p>
                  <p>{item.discount}</p>


                </div>
              </div>


            </>

          )
        })
        }
      </div>

    </>
  )
}

export default App
