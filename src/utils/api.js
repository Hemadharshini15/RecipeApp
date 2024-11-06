const BASE_URL=`https://www.themealdb.com/api/json/v1/1/`

const END_POINTS={
    recipes:"search.php?s=",
   
}
export const fetchRecipes=async()=>{
    const url=`${BASE_URL}${END_POINTS.recipes}`
    return await getData(url)
}

export const fetchRecipesByName=async(name)=>{
    const url=`${BASE_URL}${END_POINTS.recipes}${name}`
    console.log(url)
    return await getData(url)
}


async function getData(Url){
  try{
    const response= await fetch(Url);
    if(!response.ok){
        console.log('response failed')
    }
    const data=response.json();
    console.log(data)

   
    return await data
  }
  catch(error){
    console.log(error);
  }
}
