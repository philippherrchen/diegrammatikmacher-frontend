// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//this represents the dummy api layer which could be used to send and manage
// the requests to the backend(s) taking care about the audio processing
export default (req, res) => {
  res.statusCode = 200;
  //fetch to node js backend
  res.json({ correctedGrammar: "John Doe" });
};
