import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";
import BlogPost from "../components/blogPost/blogPost";

export default function Blog() {
  const blogDataArry = [
    {
      blogId: "0",
      blogHeading: "Building forms with Next.js",
      blogDate: "Thursday, 10 February 2021",
      blogDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
    },
    {
      blogId: "1",
      blogHeading: "Building forms with Next.js",
      blogDate: "Thursday, 10 February 2021",
      blogDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
    },
    {
      blogId: "2",
      blogHeading: "Building forms with Next.js",
      blogDate: "Thursday, 10 February 2021",
      blogDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
    },
  ];

  return (
    <Layout title="Blog Page">
      <Intro> Blog Page</Intro>

      {blogDataArry.map(function (data, i) {
        return (
          <BlogPost
            blogId={data.blogId}
            blogHeading={data.blogHeading}
            blogDate={data.blogDate}
            blogDescription={data.blogDesc}
          />
        );
      })}
    </Layout>
  );
}
