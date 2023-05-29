import catsvg from "../assets/catsvg.svg"

export function Features() {
  return (
    <div className="px-2 mx-auto max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 text-center gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center justify-center w-20 h-20 mx-auto bg-[#f7f7f7] rounded-full">
            <img className="h-9 w-9 " src="https://www.pngitem.com/pimgs/m/8-86587_cat-free-cat-svg-file-hd-png-download.png"/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Adoptable Cats</h3>
          <p className="mt-4 text-sm text-gray-600">
            Browse through a wide selection of adorable cats available for adoption.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-20 h-20 mx-auto bg-yellow-100 rounded-full">
          <img className="object-cover h-9 w-9 " src={catsvg}/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Cat Profiles</h3>
          <p className="mt-4 text-sm text-gray-600">
            Get detailed information and profiles of each cat, including their breed, age, and personality traits.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
          <img className="h-9 w-9 " src="https://uvhs.org/wp-content/uploads/2020/12/Untitled-design-3.svg"/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Adoption Process</h3>
          <p className="mt-4 text-sm text-gray-600">
            Learn about our seamless adoption process and how you can bring your new feline friend home.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
          <img className="h-9 w-9 " src="https://i.pinimg.com/originals/58/19/ef/5819ef098805a0785c48c775bb8aa142.png"/>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Happy Endings</h3>
          <p className="mt-4 text-sm text-gray-600">
            Read heartwarming stories and updates from our community of cat adopters.
          </p>
        </div>
      </div>
    </div>
  )
}


