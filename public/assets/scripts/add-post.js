const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="create-title"]').value;
  const post_content = document.querySelector(
    'input[name="create-content"]'
  ).value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    document.location.replace("/postage");
  }
};

document
  .querySelector(".create-form")
  .addEventListener("submit", newFormHandler);
