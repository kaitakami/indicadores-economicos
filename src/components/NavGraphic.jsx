import React, {useEffect} from 'react';

function NavGraphic(props) {
    
  /* useEffect(() => {
    console.log("---o---");
    console.log(Object.entries(props.geographyOptions));
    console.log(Object.keys(props.geographyOptions));
    console.log(Object.values(props.geographyOptions));
    console.log(Object.values(props.geographyOptions).length);
    console.log("---o---");
  }, []); */
  return (
    <nav className='w-full py-1 bg-bgComponent rounded-md overflow-x-auto md:py-2'>
      <ul className='flex flex-row flex-nowrap w-fit px-1 gap-x-4 md:px-2 md:mx-auto'>
        {Object.values(props.geographyOptions).map(props.render)}
      </ul>
    </nav>
  );
}

export default NavGraphic;