import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'research',
  description: 'thoughts.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">research</h1>
      <BlogPosts />
    </section>
  )
}
