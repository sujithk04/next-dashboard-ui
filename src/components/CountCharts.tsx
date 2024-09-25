"use client"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image'
const data = [
    {
        name: 'girls',
        count: 50,
     
        fill: '#FAE27C',
    },
    {
        name: 'boys',
        count: 50,

        fill: '#CFCEFF',
    },
    {
        name: 'Total',
        count: 100,

        fill: 'white',
    },
    
];



const CountCharts = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt="" width={20}  height={20} />
            </div>
            <div className='relative w-full h-[75%]'>
            <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
           
           
            background
            
            dataKey="count"
          />
       
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/MaleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2' />
            </div>
            <div>
        
            </div>
            <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
            <h1 className="font-bold">1234</h1>
            <h2 className="text-sm text-gray-300">Boys</h2>

          </div>

          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-lamaSky rounded-full" />
            <h1 className="font-bold">1234</h1>
            <h2 className="text-sm text-gray-300">Girls</h2>

          </div>


        </div>
        </div>
    )
}

export default CountCharts
