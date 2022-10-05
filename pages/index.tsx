import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const post = [
  {title: 'The Title', excerpt: 'And The Excerpt Discription Is Also here'},
  {title: 'The Second Title', excerpt: 'And The Second Excerpt Discription Is Also here'}
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Graphcms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div>
        {post.map((item, index) => (
          <div className='lg:col-span-8 col-span-1'>
            {item.title}
            {item.excerpt}
          </div>
        ))}
        </div>
        <div className='lg:col-span-4 col-span-1 '>
          <div className='lg:sticky relative top-8'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
