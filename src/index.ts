
import compression from "compression";
import express from "express";


const PORT = process.env.PORT || 3006;

const app = express();
app.use(compression());

app.get("/", async (_: express.Request, res: express.Response) => {
    return res.status(200).json({});
});

app.use(
  "/posts/get-by-id/:id",
  (req: express.Request, res: express.Response) => {
    // let blogData: any;
    // try {
    //   blogData = getBlogById(req.params.id);
    // } catch (err) {
    //   return res.status(500).send("Oops, better luck next time!");
    // }


    // return res.status(200).json({
    //   statusCode: 200,
    //   message: "Fetched post",
    //   data: {
    //     post: {
    //       content: blogData.content,
    //       date: blogData.date,
    //       title: blogData.title,
    //       meta: blogData.meta,
    //     },
    //   },
    // });
  }
);

app.get("/get-all-posts", async (_: express.Request, res: express.Response) => {
  // try {
  //   const blogs = await getBlogsData();
  //   // Sending the files array as the response
  //   res.status(200).json({
  //     statusCode: 200,
  //     message: "Fetched all posts",
  //     data: { blogs },
  //   });
  // } catch (e) {
  //   res.status(400).json({
  //     statusCode: 200,
  //     message: `Error While Fetching Posts: ${e}`,
  //   });
  // }
});

app.use("/posts/images/:id", (req: express.Request, res: express.Response) => {
  // const imagePath = path.join(
  //   process.cwd(),
  //   `../blog-content/ready/${req.params.id}/${req.path}`
  // );

  // fs.readFile(imagePath, (err: any, data: ArrayBuffer) => {
  //   if (err) {
  //     res.writeHead(404, { "Content-Type": "text/plain" });
  //     res.end("Not Found");
  //   } else {
  //     res.writeHead(200, { "Content-Type": "image/jpeg" });
  //     res.end(data);
  //   }
  // });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
