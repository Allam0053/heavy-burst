class User {
  id: Number
  username: String
  password: String

  constructor(id: Number, username: String, password: String) {
    this.id = id
    this.username = username
    this.password = password
  }
}

class UserService {
  users: User[] = []

  getAllUsers(): User[] {
    return this.users
  }

  pushUser(user: User): void {
    this.users.push(user)
  }

  getUserById(userId: Number): User | undefined {
    return this.users.find((user) => user.id === userId)
  }
}

var myUsers = new UserService()
myUsers.pushUser(new User(1, 'Zo', 'password'))
myUsers.pushUser(new User(2, 'Zooooo', 'password'))
console.log(myUsers.getUserById(1))
