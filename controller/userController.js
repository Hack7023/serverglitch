import sampledata from "../models/sampledata.js";

export const collectData = async (req, res) => {
  try {
    const data = await sampledata.find();

    res.status(200).json({
      result: {
        data: data,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const enterdata = async (req, res) => {
  const { month, spinning, transportation, carding, heatingandcooling } =
    req.body;

  try {
    const user = await new sampledata({
      month,
      spinning,
      transportation,
      carding,
      heatingandcooling,
    });
    await user.save();

    return res.status(200).json({ month: month });
  } catch (err) {
    res.status(422).send("duplicate key");
  }
};
