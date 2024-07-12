<div className="bg-gray-100 md:max-w-6xl mx-auto px-4 pt-4 pb-4 mt-6 md:mt-0 md:pb-0 lg:px-0">

<a className="btn bg-purple-500 block md:hidden text-center" href="/all-recipes">+ View All Recipes</a>

<div className="overflow-x-scroll lg:overflow-x-auto py-4">

    <ol className="flex space-x-6 w-full py-4">

        <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">

            <a className="block md:hover:opacity-60 flex flex-col items-center" href="/quick-&-easy">
                <img width="183" height="183" src="  "
                    className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Salmon with basil sauce, tomato salad, and rice in a bowl"
                    sizes="(min-width: 780px) 96px, 80px"
                />
                <p className="font-sans text-sm font-bold text-black leading-tight"> Quick and Easy</p>
            </a>
        </li>




        <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
            <a className="block md:hover:opacity-60 flex flex-col items-center" href="/dinner">
                <img width="183" height="183"
                    src="  "
                    className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="White hand holding a ginger chicken meatball sandwich"
                    sizes="(min-width: 780px) 96px, 80px" />
                <p className="font-sans text-sm font-bold text-black leading-tight">Dinner</p>
            </a>
        </li>
        <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
            <a className="block md:hover:opacity-60 flex flex-col items-center" href="/vegetarian">
                <img width="183" height="183" src=" "
                    className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="  "
                    sizes="(min-width: 780px) 96px, 80px" />
                <p className="font-sans text-sm font-bold text-black leading-tight">Vegetarian</p>
            </a>
        </li>

        <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
            <a className="block md:hover:opacity-60 flex flex-col items-center" href="/healthy">
                <img width="183" height="183" src=""
                    className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Couscous skillet in a pan with a wooden spoon."
                    sizes="(min-width: 780px) 96px, 80px" />
                <p className="font-sans text-sm font-bold text-black leading-tight">Healthy</p>
            </a>
        </li>

        <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
            <a className="block md:hover:opacity-60 flex flex-col items-center" href="/instant-pot">
                <img width="183" height="183" src=""
                    className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Tacos with chicken tinga and onion."
                    sizes="(min-width: 780px) 96px, 80px" />
                <p className="font-sans text-sm font-bold text-black leading-tight">Instant Pot</p>
            </a>
        </li>

        <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
            {/* https://letscook.com/recipes/vegan */}
            <a className="block md:hover:opacity-60 flex flex-col items-center" href="/vegan">
                <img width="183" height="183" src=" "
                    className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="" sizes="(min-width: 780px) 96px, 80px" />
                <p className="font-sans text-sm font-bold text-black leading-tight">Vegan</p>
            </a>
        </li>


        <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
            <a className="block md:hover:opacity-60 flex flex-col items-center" href="/meal-prep">
                <img width="183" height="183" src=" "
                    className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2"
                    alt="Roasted Vegetable Bowls with Green Tahini and a side of egg and a spoon in the bowl." sizes="(min-width: 780px) 96px, 80px" />
                <p className="font-sans text-sm font-bold text-black leading-tight">Meal Prep</p>
            </a>
        </li>


        <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
            <a className="block md:hover:opacity-60 flex flex-col items-center" href="/soups">
                <img width="183" height="183" src=""
                    className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Sweet potato peanut stew in a bowl."
                    sizes="(min-width: 780px) 96px, 80px" />
                <p className="font-sans text-sm font-bold text-black leading-tight">Soups</p>
            </a>
        </li>


        <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center">
            <a className="block md:hover:opacity-60 flex flex-col items-center" href="/salads">
                <img width="183" height="183" src=" "
                    className="rounded-full w-20 md:w-24 h-20 md:h-24 mb-2" alt="Summer Cobb Salad in a bowl."
                    sizes="(min-width: 780px) 96px, 80px" />
                <p className="font-sans text-sm font-bold text-black leading-tight">Salads</p>
            </a>
        </li>
    </ol>
</div>
<div className="md:max-w-3xl mx-auto flex justify-center">
    <form method="GET" action="https://pinchofyum.com" className="search-form flex-1" role="search">
        <label><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.5 18.5">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path d="M17.2,18.5l-4.9-4.9a8.1,8.1,0,0,1-4.7,1.6A7.9,7.9,0,0,1,2.2,13,7.9,7.9,0,0,1,0,7.6,7.9,7.9,0,0,1,2.2,2.2,7.9,7.9,0,0,1,7.6,0,7.9,7.9,0,0,1,13,
       2.2a7.9,7.9,0,0,1,2.2,5.4,8.1,8.1,0,0,1-1.6,4.7l4.9,4.9ZM7.6,13.3a6.2,6.2,0,0,0,4.1-1.6,6.2,6.2,0,0,0,1.6-4.1,6.2,6.2,0,0,0-1.6-4.1,5.8,5.8,0,1,0-8.2,8.2A6.2,6.2,0,0,0,7.6,13.3Z"
                         >

                    </path>
                </g>
            </g>
            <title>search</title></svg>
        </label>
        <input className="search-form-input w-full" name="s" type="search" aria-label="Search our recipes" placeholder="Search our recipes">
            <button className="hidden">Search</button>
        </input>
    </form>
    <span className="hidden md:block mx-4 text-gray-600 -mt-2 font-drama text-7xl leading-none lowercase tracking-normal">or</span>
    <a className="btn bg-purple-500 hidden md:flex text-center items-center leading-none" href="all-recipes">+ View All Recipes</a>
</div>
</div>