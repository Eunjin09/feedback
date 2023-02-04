import axios from "axios";

interface type {
  Countries: any[];
  Date: string;
  Global: any;
  Message: string;
}

export async function getUser(parmas: any) {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/user/login",
      parmas
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// // 위 response interface 정의로 타입 추론
// fetchCovidSummary().then(res => res.data.Message);

type CreateUserResponse = {
  name: string;
  job: string;
  id: string;
  createdAt: string;
};

async function createUser() {
  try {
    // 👇️ const data: CreateUserResponse
    const { data } = await axios.post<CreateUserResponse>(
      "https://reqres.in/api/users",
      { name: "John Smith", job: "manager" },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
