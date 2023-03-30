import { useState } from "react";
import Title from "../component/title";

export default function Post() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [news, setNews] = useState("");

  const onPost = async (e) => {
    e.preventDefault();
    const  newspost = await fetch('http://localhost:3001/api/post',{
      method: "POST",
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        title,
        image,
        newsbody: news
      })
     })
     const newsdata = await newspost.json();
     //  console.log(newsdata);

  };
  return (
    <>
     <Title title="Post" />
      <div className="row">
        <div className="col-8 offset-2 mt-3">
          <form className=" mt-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="News Title"
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="form-group pt-3 mt-2">
              <label for="exampleFormControlFile1">News Image: </label>
              <input
                type="file"
                className="form-control-file"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="mt-2">
              <label for="comment">News</label>
              <br></br>
              <textarea
                className="form-control "
                rows="10"
                name="text"
                onChange={(e) => setNews(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-success mt-4"
              onClick={(e) => onPost(e)}
            >
              POST
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
