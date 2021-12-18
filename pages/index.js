import Head from 'next/head'

var loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius orci non lacinia finibus. Aenean id erat aliquet odio euismod varius in at massa. Etiam et purus in urna efficitur gravida et eu orci. Proin nec metus id ante consequat laoreet. Etiam egestas, nibh id feugiat congue, magna diam tristique erat, nec tempus diam neque at erat. In facilisis, diam sit amet ultrices finibus, diam purus hendrerit tortor, ut aliquam nibh augue vel nulla. Suspendisse lobortis feugiat sem eget pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et quam vitae leo malesuada suscipit. Quisque vel massa dictum elit pretium condimentum. Curabitur volutpat, justo eget viverra tincidunt, mauris sem aliquam tortor, sed vulputate est tellus rutrum erat.'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-greengradient">
      <Head>
        <title>Leon Lusic Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>

      </header>

      <body className='min-h-full h-screen py-10'>
        <div className="flex justify-center text-6xl text-white w-full max-w-screen-xl shadow-lg p-6 bg-greengradient">
          <h1>
            Hello, I'm Leon. I am a mathematician and NFT developer.
          </h1>
        </div>
        <div className='justify-center py-4 text-2xl text-white'>
          <p className='py-2'>
            As a very talented mathematician, I turned towards programming and NFT development.
          </p>
          <p className='py-2'>
            I am currently finishing my third year of my math bachelor degree at VU Amsterdam.
          </p>
        </div>

        <footer className="flex items-center w-full h-fit max-h-24 border-t text-2xl uppercase text-white object-bottom fixed">
          <span className='align-center'>Social media links:</span>
          <a
            className="flex items-center justify-center"
            href="https://github.com/LeonLusic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.svg" alt="Github Logo" className="h-6 ml-2 px-1" />
          </a>
          <a
            className="flex items-center justify-center"
            href="https://www.instagram.com/leonlusic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.svg" alt="Instagram Logo" className="h-7 ml-2 px-1" />
          </a>
        </footer>
      </body>
    </div>
  )
}
