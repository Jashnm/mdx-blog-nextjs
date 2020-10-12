/** @jsx jsx */

import { Button, Flex, jsx, Link } from "theme-ui";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
        <Link href="/blog">
          <a>
            <Button sx={{ cursor: "pointer" }}>Go to Blog</Button>
          </a>
        </Link>
      </Flex>
    </div>
  );
}
