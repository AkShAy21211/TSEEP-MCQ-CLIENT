import createAxiosInstance from "../axiosInstance";

const api = createAxiosInstance("test");

export async function submitTest(answers){
  const response =  await api.post("/submit", {answers});
  return response.data;
}


export async function getTestResult(){
  const response =  await api.get("/result");
  return response.data;
}


export async function sendFeedBack(testId,data){
  const response =  await api.post(`/feedback/${testId}`, data);
  return response.data;
}