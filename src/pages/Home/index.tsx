import { useQuery } from "@tanstack/react-query";
import BookSection from "../../components/BookSection";
import Instance, { GenerateSign } from "../../utils/instance";
import useStorage from "../../utils/store";

export default function HomePage() {
  const { userData } = useStorage((data) => data);

  const { data } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const req = await Instance.get("/books", {
        headers: {
          key: userData.key,
          sign: GenerateSign("GET" + "/books" + userData.secret),
        },
      });

      return req.data;
    },
    
  });

  

  return (
    <div>
      <BookSection data={data?.data} />
    </div>
  );
}
