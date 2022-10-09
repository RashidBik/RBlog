import moment from 'moment/moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const PostCard = ({post}) => {
  console.log(post);
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img 
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className='transation duration-700 text-center mb-8 cursor-pointer hover:text-pink-800 text-3xl font-semibold '>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full '>
        <div className='flex items-center justify-center w-full lg:mb-0 mb-4 lg:w-auto mr-8'>
          <Image 
               width='30px'
               height='30px'
               className='align-middle rounded-full bg-gray-300'
               />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>
            Admin
          </p>
        </div>
        <div className='font-medium text-gray-700 '>
            {/* <svg></svg> */}
            <span>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-2'>{post.excerpt}</p>
      <div className='text-center'>
        <Link href={`/post//${post.slug}`}>
          <span className='transation duration-500 transform hover:-translate-y-1 inline-block bg-pink-800 text-lg font-medium text-white py-3 px-6 rounded-full cursor-pointer'>Continue Reading</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard