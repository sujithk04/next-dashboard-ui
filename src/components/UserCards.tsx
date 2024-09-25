import Image from "next/image"



const UserCards = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]'>
        <div className="flex justify-between items-center">
            <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600 ">2024/25</span>
             <Image src="/more.png"   alt="" width={20} height={20}  />
             </div>
             <h1 className="font-semibold text-2xl my-4">1234</h1>
             <h2 className="text-sm font-medium capitalize text-gray-500">{type}s</h2>
    </div>
  )
}

export default UserCards