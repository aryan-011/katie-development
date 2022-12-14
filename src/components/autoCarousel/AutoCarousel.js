
import React, { useEffect} from 'react'
import { useState } from 'react'
import styled,{keyframes} from 'styled-components'
import styles from './AutoCarousel.module.css'
function AutoCarousel() {
    const [data,setData]= useState(['We value you regardless your  size of distribution','Endorse the brands you love','Money-back guarante']);

    useEffect(() => {
        const intId = setInterval(() => {
        data.unshift(data.pop())
        data.unshift(data.pop())
        const temp=[...data]
        setData(temp)
        
        }, 8000)
        
        return () => clearInterval(intId);
      })

    return (
        <div className={`${styles.AutoCarouselContainer}`}>
          <h3>Work with <span>World Class Brands</span></h3>
          <div className={`${styles.LayersContainer}`}>
            <div className={`${styles.bottomLayer}`}>
            
                <Wrapper1 className='bottomanimation' >
                    {data[0]}
                    </Wrapper1>
            </div>
            <div className={`${styles.TopLayer}`}>
                <Wrapper className='animation'>
                    
                {data[1]}
                    </Wrapper>
            </div>

            <div className={`${styles.bottomLayer}`}>
                <Wrapper1 className='bottomanimation'>
                {data[2]}
                    </Wrapper1>
            </div>
          </div>
        </div>
    )
}
const animation= keyframes`
0% {
  };
  0.5%{
    
  };
  12.5% {
   
    transform: scale(1, 1);
  };
  25% {
    transform: scale(1.5, 1.5);
  }
  37.5%{
    transform: scale(1, 1);
  }

  99%{
    transform: translateX(0px) ;
  };
  100%{
    transform: translateX(-40%);
  };`
const bottomAnimation=keyframes`

99%{
    transform:translateX(0px);
};
100%{
    transfrom:translateX(40%) ;
};`
const Wrapper= styled.span`
animation-name:${animation};
`
const Wrapper1=styled.span`
animation-name:${bottomAnimation};`

export default AutoCarousel
