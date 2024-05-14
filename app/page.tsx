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
        PS: Low-key <a href="https://www.coursera.org/account/accomplishments/specialization/JAC75YNQH5TX">DeepLearning.AI</a> and <a href="https://www.coursera.org/account/accomplishments/professional-cert/FF2K7G6ESKW9" target="_blank">TensorFlow</a> Certified.

      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
