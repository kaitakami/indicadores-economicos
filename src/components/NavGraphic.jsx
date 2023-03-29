import React, {useEffect} from 'react';

function NavGraphic(props) {
  /* useEffect(()=>{
    console.log("---o---");
    console.log(props.filterCountry);
    console.log("---o---");
  }, []); */
  return (
    <nav className='w-full py-1 bg-bgComponent rounded-md overflow-x-auto md:py-2'>
      <ul className='flex flex-row flex-nowrap w-fit px-1 gap-x-4 md:px-2 md:mx-auto'>
        {props.filterCountry.map(item => props.render(item))}
      </ul>
    </nav>
  );
}

export default NavGraphic;