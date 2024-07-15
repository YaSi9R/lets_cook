import React from 'react';
import { sectionCards, categories } from "../apiData";
// import { LuSearch } from "react-icons/lu";



const Section = () => {
    // console.log(data.image_path)
    return (
        <div className="md:bg-[#faf2f1] md:pt-6 md:pb-8 lg:pt-8 lg:pb-10">
            
            <div className="md:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 px-0 lg:px-0">


                <article className="text-center col-span-2 -mx-4 md:hidden">
                    <a className="block md:hover:opacity-60 flex flex-col h-full" href="/">
                        <img
                            src={`${process.env.PUBLIC_URL}/image_2.jpg`}
                            width="840"
                            height="1200"
                            alt="Salmon with basil sauce, tomato salad, and rice in a bowl"
                            className="object-cover self-center w-full h-80 md:hover:opacity-60 flex flex-col h-full"
                            loading="eager"
                            sizes="(max-width: 840px) 100vw, 840px"
                        />
                        <p className="relative -mt-4 bg-yellow-500 px-2 sm:px-6 py-2 mx-auto text-white text-xxs sm:text-xs font-bold uppercase tracking-extra-widest sm:tracking-giant">
                            Quick and Easy
                        </p>
                    </a>
                </article>


                {sectionCards.map((data) => (
                    <article className="text-center md:max-w-6xl" key={data.id}>
                        <a className="block md:hover:opacity-60 flex flex-col h-full  mx-0" href="/">
                            <img
                                width="840"
                                height="1200"
                                src={data.image_path}
                                className="object-cover self-center w-44 h-44 md:w-full md:h-full bronze-filter"
                                alt={data.title}
                                loading="eager"
                                sizes="(min-width: 1220px) 276px, (min-width: 820px) calc(23.95vw - 11px), (min-width: 440px) 171px, 41.67vw"
                            />
                            <p className="relative -mt-4 bg-yellow-500 px-2 sm:px-6 py-2 mx-auto text-white text-xxs sm:text-xs  uppercase tracking-extra-widest font-extrabold sm:tracking-giant no-underline">
                                {data.title}
                            </p>
                        </a>
                    </article>
                ))}

            </div>

            <div className="bg-[#f0dfc8]  h-auto  md:max-w-6xl mx-auto px-1 pt-0 pb-1 mt-3 md:mt-0 md:pb-0 lg:px-0">
                {/* <a className="md:hidden btn bg-purple-500 block text-center" href="/all-recipes">+ View All Recipes</a> */}
                
                <div className=" overflow-x-scroll  pt-4 pb-3">
                    <ol className="flex space-x-6 w-full py-4">
                        {categories.map((category, index) => (
                            <li className="block w-120 md:w-24 flex-grow flex-shrink-0 text-center" key={category.id}>
                                <a className="block md:hover:opacity-60 flex flex-col items-center" href={`/${category.name}`}>
                                    <img
                                        width="183"
                                        height="183"
                                        src={category.image_path}
                                        className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2 bronze-filter"
                                        alt={category.name.replace(/-/g, ' ')}
                                        sizes="(min-width: 780px) 96px, 80px"
                                    />
                                    <p className="font-sans text-sm font-bold text-[#795833] leading-tight capitalize no-underline"  style={{ textDecoration:"none"}}>
                                        {category.name.replace(/-/g, ' ')}   
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>

                <div class=" relative flex  text-center items-center justify-center mb-10 md:max-w-3xl mx-auto justify-center  ">
                    <form method="GET" action="/search" class="relative drop-shadow-md text-center items-center  w-full flex  flex-row items-center  border-2 border-gray-400" role="search">


                        {/* <LuSearch className='  flex absolute bg-transparent ml-2 font-semibold' /> */}

                        <input class=" flex search-form-input  pl-[32px] items-center w-full h-[50px] " name="s" type="search" aria-label="Search our recipes" placeholder="Search our recipes" />
                        <button class="hidden">Search</button>
                    </form>
                    <span class="flex  md:block mx-4 text-[#795833] -mt-2 font-drama text-4xl leading-none lowercase tracking-normal">or</span>
                    <a style={{
                        backgroundColor: '#795833',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        lineHeight: 'none',
                        fontWeight: '700',
                        borderRadius: '0.375rem', 
                        padding: '0.5rem 1rem', 
                        color: '#ffffff' ,
                        width:"300px",
                        height:"50px",
                        textDecoration:"none",
                        

                        
                    }}
                        href="/all-recipes">
                        + View All Recipes
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Section;
