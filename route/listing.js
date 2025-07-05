const express = require("express");
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { authenticate } = require("passport");
const { isLoggedin, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer")
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage})
const listingControllers = require("../controllers/listings.js");

router.route("/")
.get( wrapAsync(listingControllers.index))
.post(
  isLoggedin, 
 upload.single ("listing[image]"),
  validateListing,
   wrapAsync(listingControllers.createListing))

//Index Route
router.get("/", wrapAsync(listingControllers.index))

//New Route
router.get("/new", isLoggedin, listingControllers.renderNewForm);

//Show Route
router.get("/:id", wrapAsync(listingControllers.showRoute));

//Edit Route
router.get("/:id/edit", isLoggedin, isOwner,wrapAsync(listingControllers.editListing));

//Update Route
router.put("/:id",isLoggedin, isOwner, upload.single ("listing[image]"),validateListing, wrapAsync(listingControllers.updateListing))

//Delete Route
router.delete("/:id", isLoggedin, isOwner,wrapAsync(listingControllers.deleteListing));

router.get("/logout", (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    req.flash("success", "Logged out successfully!");
    res.redirect("/listings");
  });
});

module.exports = router