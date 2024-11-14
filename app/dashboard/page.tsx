import { Suspense } from "react";

export default function Page() {
  
  return <div>
    <Suspense fallback={<p>Load users</p>}>
      <Users ></Users>
    </Suspense>
    <Suspense fallback={<p>Load post</p>}>
      <Blog ></Blog>
    </Suspense>
  </div>;
}

async function Users() {
  await new Promise((res) => setTimeout(res, 3000));
  return <p>User list</p>;
}



async function Blog() {
    await new Promise((res) => setTimeout(res, 5000));
    return <p>Blog LIst</p>;
  }
  