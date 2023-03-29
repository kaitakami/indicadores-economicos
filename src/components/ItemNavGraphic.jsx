import React, {useEffect} from 'react';

function ItemNavGraphic(props) {
  /* useEffect(()=>{
    console.log("---o---");
    console.log("hi");
    console.log("---o---");
  }, []); */
  return (
    <li className='flex w-fit px-2 py-1 bg-bgElement rounded-md ring-1 ring-lightColor border-solid cursor-pointer items-center justify-items-center text-center text-sm md:text-base' onClick={() => {props.setCurrentTicker(props.ticker); props.setCurrentCountry(props.country);}}>
      {props.country}
    </li>
  )
}

export default ItemNavGraphic;