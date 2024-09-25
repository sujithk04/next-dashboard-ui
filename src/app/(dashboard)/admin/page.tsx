import CountCharts from "@/components/CountCharts"
import UserCards from "@/components/UserCards"

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col md:flex-row '>
      {/*LEFT */}

      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/*USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
        {/*MIDDLE CHARTS */}
        <div className="flex flex-col lg:flex-row">
          {/*COUNT CHARTS */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountCharts />

          </div>
          {/*ATTEND CHARTS */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>

        </div>
        {/*BOTTOM CHARTS */}
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
            <h1 className="font-bold">1234</h1>
            <h2 className="text-sm text-gray-300">Boys</h2>

          </div>

          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-lamaSky rounded-full"></div>
            <h1 className="font-bold">1234</h1>
            <h2 className="text-sm text-gray-300">Boys</h2>

          </div>


        </div>
      </div>



      {/*right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  )
}

export default AdminPage