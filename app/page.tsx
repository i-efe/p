import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        personal
      </h1>
      <p className="mb-4">
        {`hi, EFE here.
        `}
        I'm Passionate about the intersection of artificial intelligence and neuroscience.
        PS: low-key <b>DeepLearning</b> and <b>TensorFlow</b> Certified. 
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
