export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-base-100">
        <div className="flex gap-2 flex-col">
          <div className="text-secondary flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl font-bold">describe.</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <input
              type="text"
              placeholder="enter an image url"
              className="input input-bordered w-full max-w-xs"
              id="imageUrl"
            />
            <button className="btn btn-secondary">generate</button>
          </div>
        </div>
      </div>
    </>
  );
}

function callApi() {
  let imageUrl = document.getElementById("imageUrl") as HTMLInputElement;

  fetch("http://localhost:3000/api/describe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      imageUrl: imageUrl.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}