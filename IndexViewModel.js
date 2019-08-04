class IndexViewModel
{
    constructor()
    {
        this.Name = "";
        this.Surname1 = "";
        this.Age = 0;
        this.Car = "";
        this.IsLogin = true;

        this.Users = [];
    }

    CreateUser()
    {
        let user = new User();
        user.Name = this.Name;
        user.Surname1 = this.Surname1;
        user.Age = this.Age;
        user.Car = this.Car;

        this.Users.push(user);
    }

    ChangeViews()
    {
        this.IsLogin = !this.IsLogin;
    }
}

MyApp.controller("IndexViewModel", IndexViewModel);