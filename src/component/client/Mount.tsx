import { useEffect, useState } from "react";

const Mount = () => {
  const [title, setTitle] = useState<string>("");
  const [posts, setPosts] = useState<any[]>([]);
  const [type, setType] = useState<string>("posts");
  const tabs = ["posts", "albums"];
  useEffect(() => {
    fetch(` http://localhost:3001/${type}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, [type]);
  return (
    <div>
      <p>ahihi</p>
      {tabs?.map((tab, index) => (
        <button
          onClick={() => {
            setType(tab);
          }}
          key={index}
        >
          {tab}
        </button>
      ))}
      <br />
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts?.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Mount;
