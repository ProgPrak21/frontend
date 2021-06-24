import { useQuery } from "@apollo/client";
import { GET_USER_DATA } from "../graphql/get-user-data";

export default function UserData() {
  const { loading, error, data } = useQuery(GET_USER_DATA, {
    onCompleted: () => {
      console.log(data);
    },
    onError: () => {
      console.log(error);
    },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <div style={{ color: "white" }}>data will be here!</div>;
}
