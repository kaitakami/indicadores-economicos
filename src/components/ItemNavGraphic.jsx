import React, {useEffect} from 'react';

function ItemNavGraphic(props) {
  /* useEffect(()=>{
    console.log("---o---");
    console.log(props.geographyName);
    console.log(props.geographyCode);
    console.log("---o---");
  }, []); */
  return (
    <li className='flex w-fit px-2 py-1 bg-bgElement rounded-md ring-1 ring-lightColor border-solid cursor-pointer items-center justify-items-center text-center text-sm md:text-base' onClick={() => props.setCurrentTicker(props.geographyCode)}>
      {props.geographyName}
    </li>
  )
}

export default ItemNavGraphic;