import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hi, EFETOMEH here
      </h1>
      <p className="mb-4">
        {`Passionate about the intersection of artificial intelligence and neuroscience.
        `}
      </p>
      <p>
        PS: Low-key <a href="https://www.coursera.org/account/accomplishments/specialization/JAC75YNQH5TX"><u>DeepLearning.AI</u></a> 
        and <a href="https://www.coursera.org/account/accomplishments/professional-cert/FF2K7G6ESKW9" target="_blank"><u>TensorFlow</u></a> Certified.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
