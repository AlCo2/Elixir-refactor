import { ReactNode } from "react";


const ServiceIntro = ({icon, title, description}:{icon:ReactNode, title:string, description:string}) => {
  return (
    <div className="">
        {icon}
        <div className="ml-4 mt-2">
            <h5 className="mb-1 text-2xl font-bold font-Italiana">{title}</h5>
            <p className="text-sm opacity-70 font-semibold font-Opensans">{description}</p>
        </div>
    </div>
  )
}

export default ServiceIntro;