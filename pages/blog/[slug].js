/** @jsx jsx */
import Head from "next/head";
import { getAllPostSlugs, getPostdata } from "../../lib/posts";
import { Box, jsx, Text } from "theme-ui";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import AllComponents from "../../components/AllComponents";

const components = AllComponents;

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components });
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Box sx={{ variant: "containers.page" }}>
        <Box sx={{ mt: "4rem", textAlign: "center" }}>
          <h1>{frontMatter.title}</h1>
          <Text
            sx={{
              width: ["80%", "50%"],
              mx: "auto"
            }}
          >
            {frontMatter.author}
            {" / "}
            <span>{frontMatter.date}</span>
          </Text>
        </Box>
        <Box sx={{ mt: "4rem" }}>
          <Box>{content}</Box>
        </Box>
      </Box>
    </>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await renderToString(content, {
    components,
    scope: data
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
}
