import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Article = ({title, price, img1, img2, id}) => {


    const [article, setArticle] = useState(true)
    const [arrowLeft, setArrowLeft] = useState(true)
    const [arrowRight, setArrowRight] = useState(true)
    


    return ( 
        <Link to={`/products/${id}`}>
            <div  className="mt-40 border h-[555px] border-black px-4" >
                <div onMouseEnter={() => setArticle(false)} onMouseLeave={() => setArticle(true)} 
                    className={"h-4/5 relative w-96  border mx-4 bg-[#ECECEC]"}>
                    
                    <img  className={article? "absolute top-0 h-full w-full  z-20 duration-1000" : "absolute top-0 h-full w-full  z-20 hidden duration-1000"  } src= {`http://localhost:8080/${img1}`} alt="shoes"/>

                    <img className={article ? "absolute top-0 h-full w-full   z-10 hidden duration-1000 " : "absolute top-0 h-full w-full  duration-1000  z-10"} src ={`http://localhost:8080/${img2}`} alt="shoes"/>
                    
                    <div className="flex justify-between absolute top-2/4 z-10 w-full px-5">
                            
                            <div className={arrowLeft ? " p-1 w-8 h-8 rounded-full bg-white/[0.7] flex justify-center items-center duration-700" : " p-1 w-8 h-8 rounded-full bg-white flex justify-center items-center duration-700"}
                                onMouseEnter={() => setArrowLeft(false)} onMouseLeave={() => setArrowLeft(true)} >
                                
                                {arrowLeft ? <BsChevronLeft className="  text-xl " />:<BsArrowLeft className="  text-xl " />}
                                
                            </div>
                            <div className={arrowRight ? " p-1 w-7 h-7 rounded-full bg-white/[0.7] flex justify-center items-center duration-500" : " p-1 w-7 h-7 rounded-full bg-white flex justify-center items-center duration-500"}
                                onMouseEnter={() => setArrowRight(false)} onMouseLeave={() => setArrowRight(true)}>
                                {arrowRight ? <BsChevronRight className="  text-[15px]" />:<BsArrowRight className="  text-[15px]" />}
                            </div>
                        </div>
                </div>
                
                <div className="mx-4">
                    <div className="font-bold">{title}</div>
                    <div className="font-thin ">{price}</div>
                </div>
            </div>
        </Link>
     );
}
 
export default Article;
