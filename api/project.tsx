import instance from "../utils/axios";

export async function getList() {
  try {
    const { data } = await instance.get("/project");
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getLikeList() {
  try {
    const list = {
      count: 0,
      order: "desc",
      type: "week",
    };
    const { data } = await instance.get("/project/like", { params: list });
    return data;
  } catch (error) {
    console.error(error);
  }
}
