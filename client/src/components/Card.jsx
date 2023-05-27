

const Card = (props) => {
  return (
    <div  className="mx-auto w-[300px] rounded-md border border-gray-400 ">
            <img
              src={props.img}
                alt="img"
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">{props.name}</h1>
              <h6 className="mt-3 font-medium">{props.breed}</h6>
              <p className="mt-3 text-xl text-gray-900 font-handwriting2">
                "{props.desc}"
              </p>
              
            </div>
          </div>
  )
}

export default Card