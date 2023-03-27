import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_src:
    '/playground_assets/screenshot%202023-03-27%20at%2014.47.32-1500w.png',
  rootClassName: '',
  image_alt: 'image',
}

BlogPostCard2.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard2
