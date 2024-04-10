import axios from "axios";
import md5 from "md5";
import { queryClient } from "../App";

const Instance = axios.create({
  baseURL: "https://no23.lavina.tech/",
});

type CreateType = {
  value: string;
  key: string;
  secret: string;
};

type EditType = {
  id: string;
  newStatus: number;
  key: string;
  secret: string;
};

function Create({ value, key, secret }: CreateType) {
  Instance.post(
    "/books",
    { isbn: value },
    {
      headers: {
        key: key,
        sign: GenerateSign(
          "POST" + "/books" + JSON.stringify({ isbn: value }) + secret
        ),
      },
    }
  ).then(() => {
    queryClient.invalidateQueries({
      queryKey: ["books"],
      refetchType: "active",
    });
  });
}

function PATCH({ newStatus, id, key, secret }: EditType) {
  return Instance.patch(
    `/books/${id}`,
    { status: newStatus },
    {
      headers: {
        key: key,
        sign: GenerateSign(
          "PATCH" +
            `/books/${id}` +
            JSON.stringify({ status: newStatus }) +
            secret
        ),
      },
    }
  ).then(() => {
    queryClient.invalidateQueries({
      queryKey: ["books"],
      refetchType: "active",
    });
  });
}

type DeleteType = {
  id: string;
  key: string;
  secret: string;
};

async function Delete({ id, key, secret }: DeleteType) {
  Instance.delete(`/books/${id}`, {
    headers: {
      key: key,
      sign: GenerateSign("DELETE" + `/books/${id}` + `${secret}`),
    },
  }).then(() => {
    queryClient.invalidateQueries({
      queryKey: ["books"],
      refetchType: "active",
    });
  });
}

function GenerateSign(d: string) {
  return md5(d);
}

export default Instance;
export { GenerateSign, Delete, Create, PATCH };
