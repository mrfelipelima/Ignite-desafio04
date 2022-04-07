import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requester = this.usersRepository.findById(user_id);
    if (!requester) {
      throw new Error("Requester not found");
    }
    if (!requester.admin) {
      throw new Error("Requester must be an admin");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
