export const search = async (req, res, next) => {
  try {
      console.log(req.query);
      return res.status(200).json(req.query)
  } catch (error) {
    next(error);
  }
};
