
const allTestimonyResolver = async (db) => {
  const allTestimonies = await db.testimonies.findAll({
    where: {
      approved: true,
    },
    include: [{
      model: db.user,
      as: 'author',
      required: true,
      attributes: { exclude: ['password'] },
    }],
    limit: 20,
    attributes: { exclude: ['userRef'] },
  });
  const allTestimony = allTestimonies.map((testimony) => ({
    ...testimony.dataValues,
    author: testimony.dataValues.author.dataValues,
  }));
  return allTestimony;
};

export default allTestimonyResolver;
