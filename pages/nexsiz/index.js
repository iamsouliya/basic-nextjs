import Link from 'next/link';
import React from 'react';
import styles from '../../styles/nexsiz.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      nexsizs: data,
    },
  };
};

const index = ({ nexsizs }) => {
  return (
    <div>
      <h1>All Nexsiz</h1>
      {nexsizs.map((nexsiz) => (
        <Link href={`/nexsiz/${nexsiz.id}`} key={nexsiz.id}>
          <a className={styles.single}>
            <h3>{nexsiz.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;
