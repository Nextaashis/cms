export default function Footer() {
  return (
    <>
      <style jsx>
        {`
          .all-browsers {
            margin: opxx;
            padding: 5px;
            background-color: lightgray;
          }

          .all-browsers > h1,
          .browser {
            margin: 10px;
            padding: 5px;
          }

          .browser {
            background: white;
          }

          .browser > h2,
          p {
            margin: 4px;
            font-size: 90%;
          }

          footer {
            text-align: center;
            padding: 3px;
            background-color: DarkSalmon;
            color: white;
          }
        `}
      </style>

      <div className="mt-5">
        <div className="mt-5">
          <footer className="mt-5">
            <p>
              Nepali Blog Post.
              <br />
              <a href="mailto:hege@example.com">blog@example.com</a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
