export async function postmaster(postData: Record<string, unknown>) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_LUMBER_JACK_PORT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );

    if (response.ok) {
      const responseData = await response.text();
      console.log(responseData);
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
