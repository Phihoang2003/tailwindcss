import "./index.css";
import {AiOutlineHome} from "react-icons/ai"
import {LiaCertificateSolid} from "react-icons/lia"

import {BsFillDatabaseFill} from "react-icons/bs"

const App=()=>{
  return(
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-2">
        <h1 className="text-lg  text-cyan-400 tracking-normal leading-normal font-bold ">Deploy faster</h1>
        <h1 className="text-3xl mt-3 font-bold tracking-wider leading-normal">A better workflow</h1>
        <div className="font-base mt-5 text-lg
         tracking-wider leading-normal ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque minus recusandae dolorem exercitationem, tempore veritatis facilis aliquam tenetur facere maxime eligendi, dolor modi quod, iure molestiae reprehenderit qui quidem porro!</div>
        <div className="grid mt-4 grid-cols-8 w-full ">
          <AiOutlineHome className="text-[26px] col-span-1 ml-6"/>
         
            
            <div className="inline-block col-span-6 text-lg"><h1 className="inline-block">Push to deploy. </h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</div>
          
        </div>
        <div className="">
          <LiaCertificateSolid/>
          <div>
            <span>SSL certificates.</span>
            <div>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo</div>
          </div>
        </div>
        <div className="">
          <BsFillDatabaseFill/>
          <div>
            <span>Database backups.</span>
            <div>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</div>
          </div>
        </div>
      </div>


      <div className="col-span-3">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default App;
