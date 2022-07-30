
const homeRoute = (req, res)=>{
    res.send('love')
}

const studentRoute = (req, res)=>{
    res.send('student')
}

module.exports = {
    homeRoute,
    studentRoute
}