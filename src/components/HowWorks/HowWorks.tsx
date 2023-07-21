import React from 'react'
import kiralamaozetidir from "@assets/1.jpg"
import arabanisec from "@assets/2.jpg"
import iphone from "@assets/iphone.png"
import arrows from "@assets/arrows.svg"
import Tab from '../Tab/Tab'
type Props = {}

const HowWorks = (props: Props) => {
    const [state, setState] = React.useState(0);
  return (
    <div className='flex items-center container'>
        <div className='relative'>
            <img src={arrows}
            onClick={(e) => {
                e.stopPropagation()
                const section = document.querySelector( "#item"+state );
                section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            }}
            className='absolute inset-0 translate-y-1/3' alt="" />
            <div className='relative overflow-hidden'>
            <img src={iphone} alt="" />
            <div className='bg-white absolute top-0 left-0 w-1/2 h-96 overflow-hidden translate-x-1/2 translate-y-[20%] rounded-md'>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={kiralamaozetidir} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
  <img src={kiralamaozetidir} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
  <img src={kiralamaozetidir} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
  <img src={kiralamaozetidir} className="w-full" />
  </div>
</div> 
            </div>
            </div>
        </div>
        <div>
        <h1 className='text-primary uppercase font-semibold text-3xl '>Tİktak Nasıl ÇalışIr?</h1>
        <div>
            <Tab 
            onCallback={(cb:number) => {
                setState(cb)
            }}
            data={
                [
                    {
                        id:0,
                        header:"KAYIT OL",
                        imageIndex:0,
                        contentElement: <div>
                            test
                        </div>
                    },
                    {
                        id:1,
                        header:"ARABANI SEÇ",
                        imageIndex:0,
                        contentElement: <div>
                            test
                        </div>
                    },
                    {
                        id:2,
                        header:"KULLANMAYA BAŞLA",
                        imageIndex:0,
                        contentElement: <div>
                            test
                        </div>
                    },
                    {
                        id:3,
                        header:"KİRALAMAYI BİTİR",
                        imageIndex:0,
                        contentElement: <div>
                            test
                        </div>
                    }
                ]
            }
            
            />
        </div>
        </div>
    </div>
  )
}

export default HowWorks