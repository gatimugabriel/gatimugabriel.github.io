import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import TableOfContents from '../components/TableOfContents';
import { blogs } from '../data/blogs';

function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-accent hover:underline">
          &larr; Back to blog
        </Link>
      </div>
    );
  }

  // Markdown components mapping
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          className="rounded-lg !my-6 text-sm"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-sm text-accent" {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <>
      <div className="scroll-progress-bar fixed top-0 left-0 w-full h-1 bg-accent z-[100]" />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-12 pb-16 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-12"
      >
        <div className="flex-1 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="mb-10 border-b border-stone-200 dark:border-stone-800 pb-8">
            <div className="flex items-center gap-3 mb-4 text-sm text-stone-500">
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <div className="flex gap-2">
                {blog.tags.map((tag) => (
                  <span key={tag} className="text-accent font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400">
              {blog.excerpt}
            </p>
          </div>

          <div className="prose prose-stone dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent hover:prose-a:text-accent/80">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
              components={components}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Table of Contents will only render on desktop in the flex layout, and as a floating button on mobile */}
        <TableOfContents content={blog.content} />

      </motion.article>
    </>
  );
}

export default BlogPost;
