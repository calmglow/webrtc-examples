const tempToken="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6ImMyMmMzYTI3LWViZTItNGI5Yi1iZjIwLTFlYzdlYWFhODlmNyIsIm1lZXRpbmdJZCI6ImJiYjQ3M2E0LWY5NzctNDg0Ny04OTU1LWJlMzE4NTk3MTRhYiIsInBhcnRpY2lwYW50SWQiOiJhYWFmMTkwYi1hMDJjLTQ1YWUtOWE5MC03MGNkZWQxMjRhMjgiLCJwcmVzZXRJZCI6IjUwODI5YTc5LWI3OWMtNDQ4ZS1hNWEwLTA2NjBiNjI2ZjIyNyIsImlhdCI6MTY3ODY3ODg2MSwiZXhwIjoxNjg3MzE4ODYxfQ.Qf0_lk0daFQVdlwHkt_sfVr7EqKL859eZC1OCDpoxoXsKvQekbcMuwDMekssRUOEN5me0IYJS6lBHZq6sucDfkaZcfm3U8dTMrIQoC7t4uiRraJMsOJULFyBWOt0tTvUqsYfl64y0rNWNA9ZK-6vUPgCmI_fq3Dvtx0TeGttVZkqpqxuSbG0Soo6lZYYI-FRgPfSAKzkixvV_9ALXFKhYbpmfLuWZz_GRzIK8Y73Xn155eEMDl4HDu-fbZfIX6WkEUuC8rQobHDbduOmkzmB2VV3g-BakS7ILllTOEiihFnX1ea1gYncVW_KEFuHJiGi1snVxiAHnHjgu8s7VK8Lgw";
const searchParams = new URL(window.location.href).searchParams;
const authToken = searchParams.get('authToken')?searchParams.get('authToken'):tempToken;

const init = async () => {
  const meeting = await DyteClient.init({
    authToken: authToken,
    defaults: {
      audio: true,
      video: true,
    },
  });

  document.getElementById('my-meeting').meeting = meeting;
};

init();