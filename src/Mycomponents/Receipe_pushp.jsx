import React from 'react'
import './css/product_page.css'
import Items from './js/data.js'

export const Receipe_pushp = ({spice,category}) => {
  return (
    <div className=" container-fluid mt-4">
    <div className="row">


      {Items.filter(item => item.spice_url === spice && item.url === category).map(filteredItem => (
        <>
          {filteredItem.video ?
            <>
             
                <div className="float-right"><a className='rec-button' href="/recipe/videos" target="_blank">View All Recipes</a></div>
                <div className=" row recipe-con " data-aos="flip-down">
                  <div
                    className="col-sm-12 col-lg-6 order-2 text-center "

                  >
                    <div className="py-2"><iframe width="500" height="280" src={filteredItem.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen></iframe></div>

                  </div>
                  <div className="col-sm-12 col-lg-6  text-center">
                    <marquee
                      className="marquee_div_rec"
                      behavior="scroll"
                      direction="left"
                      scrollamount="9"
                    >
                      {filteredItem.spice} ❤ Recipe
                    </marquee>
                  </div>

                </div>
             
            </> : null

          }
        </>
      ))
      }




    </div>
  </div>
  )
}
