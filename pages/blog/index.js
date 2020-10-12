/** @jsx jsx */
import { jsx, Flex, Heading, Box, Text } from "theme-ui";
import Link from "next/link";
import { getSortedPosts } from "../../lib/posts";
const BlogIndex = ({ allPostsData }) => {
  return (
    <>
      <Box sx={{ variant: "containers.page" }}>
        <Heading>My Blog</Heading>
        <Flex
          sx={{
            flexWrap: "wrap",
            mt: "2rem",
            direction: "column",
          }}
        >
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <Box variant="containers.postCard" sx={{ my: "0.5rem" }} key={slug}>
              <li
                sx={{
                  display: "flex",
                  flexDirection: ["column", "row"],
                  my: "1rem",
                }}
              >
                <Box>
                  <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
                    <a>
                      <Heading
                        sx={{
                          fontSize: "calc(1.6rem + 0.2vw)",
                          fontWeight: "500",
                        }}
                      >
                        {title}
                      </Heading>
                    </a>
                  </Link>
                  <Box sx={{ my: "0.5rem" }}>{excerpt}</Box>
                  <Text>{date}</Text>
                </Box>
              </li>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};
export default BlogIndex;
export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
