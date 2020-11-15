var users = [
    {"id": 1, "name": "USER1", "email": "hungdovan997@gmail.com", age: 31}, 
    {"id": 2, "name": "USER2", "email": "hungclone0002@gmail.com", age: 30}
];

module.exports = {
    index: (req, res)=>{
        res.render("index", {
            users: users
        })
    },
    search: (req, res)=>{
        let name_search = req.query.name;
        let age_search = req.query.age;
        let result = users.filter(user => {
            return user.name.toLowerCase().indexOf(name_search.toLowerCase()) !== -1 && user.age === parseInt(age_search);
        })
        res.render("index", {users: result});
    },
    show: (req, res)=>{
        let user = users.find(user => {
            return user.id === parseInt(req.params.id);
        })
        console.log(user);
        res.render("show", {users: Object.values(user)});
    }
}