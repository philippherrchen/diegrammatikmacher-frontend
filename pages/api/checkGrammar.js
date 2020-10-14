// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  //fetch to node js backend
  res.json({ correctedGrammar: "John Doe" });
};
