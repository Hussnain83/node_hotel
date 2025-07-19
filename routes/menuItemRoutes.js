const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const menu = req.body;
    const newmenu = new MenuItem(menu);
    const rspnc = await newmenu.save();
    console.log("menu saved");
    res.status(200).json(rspnc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const menu = await MenuItem.find();
    console.log("Menu fetched");
    res.status(200).json(menu);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/:tastetype", async (req, res) => {
  try {
    const tastetype = req.params.tastetype;
    if (tastetype == "sweet" || tastetype == "spicy" || tastetype == "sour") {
      const response = await MenuItem.find({ taste: tastetype });
      console.log("response fetched");
      res.status(200).json(response);
    } 
    else {
      res.status(404).json({ error: "invalid worktype " });
    }
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.put("/:id", async(req, res) =>{
  try{
    const menuid = req.params.id;
    const updatedmenu = req.body;
    const response = await MenuItem.findByIdAndUpdate(menuid, updatedmenu,{
      new: true,
      runValidators: true
    });
    console.log("Menu updated");
         res.status(200).json(response);


  }
  catch(err){
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });    
  }
})

router.delete("/:id", async(req,res)=>{
  try{
    const menuid = req.params.id;
    const response = await MenuItem.findByIdAndDelete(menuid);
    if(!response){
      return res.status(404).json({error: "Menu not found"});
    }
    console.log("menu delete");
    res.status(200).json({message: "Menu Deleted Successfully"});    

  }
  catch(err){
console.log(err);
    res.status(500).json({ error: "Internal Server Error" });    
  }
})

module.exports = router;
