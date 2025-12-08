export const submitRating = (req, res) => {
  try {
    const { userName, itemName, rating, comment } = req.body;

    console.log("✅ New Rating Submitted:");
    console.log("User:", userName);
    console.log("Item:", itemName);
    console.log("Stars:", rating);
    console.log("Comment:", comment || "No comment");

 
  } catch (error) {
    console.error("Error:", error);

  }
};
