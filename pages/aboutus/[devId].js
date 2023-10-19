// pages/[devId].js
import { useRouter } from "next/router";

function DevDetails() {
  const router = useRouter();
  const details = [
    { id: "1", name: 'Yash', role: 'Senior Developer' },
    { id: "2", name: 'Vaibhav', role: 'Backend Developer' },
    { id: "3", name: 'Suresh', role: 'Frontend Developer' }
  ];
  const { devId } = router.query;

  const detail = details.find((item) => item.id === devId);

  if (!detail) {
    return <p>Developer not found</p>;
  }

  return (
    <>
      <h2>{detail.name}</h2>
      <h4>{detail.role}</h4>
    </>
  );
}

export default DevDetails;
