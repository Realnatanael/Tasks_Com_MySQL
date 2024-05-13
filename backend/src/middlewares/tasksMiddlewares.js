export const validateBody  = (req, res, next) => {
    const { title } = req.body;
    if(!title || title === "" || title === undefined) return res.status(400).json({message: 'O campo "title" é obrigatório'}); 
    next();
}