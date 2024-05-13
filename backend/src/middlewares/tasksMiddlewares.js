export const validateBody  = (req, res, next) => {
    const { title } = req.body;
    if(!title || title === "" || title === undefined) return res.status(400).json({message: 'O campo "title" é obrigatório'}); 
    next();
}

export const validateFields = (req, res, next) => {
    const { title, status } = req.body;
    if(!title || title === "" || title === undefined) return res.status(400).json({message: 'O campo "title" é obrigatório'}); 
    if(!status || status === "" || status === undefined) return res.status(400).json({message: 'O campo "status" é obrigatório'}); 
    next();
}
