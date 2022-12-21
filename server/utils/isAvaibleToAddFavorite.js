const Favorite = require("../models/Favorite");

const isAvaibleToAddFavorite = async (roomId, userId) => {
  const favoritesByRoom = await Favorite.find({
    roomId,
  });
  const userFavorites = favoritesByRoom.filter(
    (favorite) => favorite.userId.toString() === userId.toString()
  );
  if (userFavorites.length > 0) return false;
  return true;
};

module.exports = isAvaibleToAddFavorite;
