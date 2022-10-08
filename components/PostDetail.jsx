import moment from 'moment'
import React from 'react'


const PostDetail = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img 
        src={post.featuredImage.url}
        alt={post.title}
        className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className='px-4 lg:px-8'>
        <div className='flex items-center mb-8 w-full'>
            <div className='block lg:flex text-center items-center justify-center mb-8 w-full '>
              <div className='flex items-center justify-center w-full lg:mb-0 mb-4 lg:w-auto mr-8'>
                <img src=''
                    alt=''
                    width='30px'
                    height='30px'
                    className='align-middle rounded-full'
                />
                <p className='inline align-middle text-gray-700 ml-2 text-lg'>
                  {/* {post.author.name} */}
                </p>
              </div>
            <div className='font-medium text-gray-700 '>
              {/* <svg></svg> */}
              <span>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </span>
            </div>
          </div>
          <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
          {post.content.raw.children.map((typeObj, index))}
        </div>
      </div>
    </div>
  )
}

export default PostDetail
