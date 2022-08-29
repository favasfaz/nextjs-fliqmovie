import config from "../utilities/config"
import {useRouter} from 'next/router'
function Nav() {
    const router = useRouter()
  return (
    <div className="relative">
        <div className="flex px-10 sm:px-20 text-2xl
         whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll overscroll-y-none scrollbar-hide">
            {Object.entries(config).map(([key,{Title,url}])=>{
                return(
                    <h2
                    onClick={()=>router.push(`/?genre=${Title}`)}
                     className="cursor-pointer transition duration-100
                     transform hover:scale-125 hover:text-white
                      active:text-red-500" key={Title}>{Title}</h2>
                )
            })}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#68042a] h-10 w-1/12"/>
    </div>
  )
}

export default Nav