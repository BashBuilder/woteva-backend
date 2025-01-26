const authMiddleware = async (next: any) => {
  try {
    return next();
  } catch (error) {
    next();
  }
};
