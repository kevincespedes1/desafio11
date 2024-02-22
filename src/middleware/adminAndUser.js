export function isAdmin(req, res, next) {
    if (req.session.user && req.session.user.rol === 'admin') {
        res.status(403).json({ success: false, message: 'Acceso no autorizado para administradores' });
    } else {
        next(); 
    }
}

export function isUser(req, res, next) {
    if (req.session.user && req.session.user.rol === 'usuario') {
        res.status(403).json({ success: false, message: 'Acceso no autorizado para usuarios' });
    } else {
        next(); 
    }
}