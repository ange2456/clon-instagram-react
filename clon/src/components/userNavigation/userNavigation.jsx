import { useState } from "react"
import WithoutContent from "../userPages/withoutContent/WithoutContent"
import PostSections from "../userPages/Posts/PostSections"

const userNavigation = () => {
    const [activeItem, setActiveItem] = useState(true)
    const [contentEmpty, setContentEmpty] = useState(false)

    return (
    <>
            <div className="sections-menu">
                    <div className={`section-menu-item ${activeItem ? 'active' : ''}`}>
                        <svg aria-label="" className="_ab6-" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                        <span>PUBLICACIONES</span>
                    </div>
                    <div className="section-menu-item">
                        <svg aria-label="" className="_ab6-" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="12" role="img" viewBox="0 0 24 24" width="12"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                        <span>GUARDADO</span>
                    </div>
                    <div className="section-menu-item">
                        <svg aria-label="" className="_ab6-" color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
                        <span>ETIQUETADAS</span>
                    </div>
            </div>
        <PostSections/>
    </>
  )
}

export default userNavigation