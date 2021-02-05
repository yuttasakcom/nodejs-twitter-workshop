import { Service } from 'typedi';
@Service()
export class PostsService {
  get() {
    return [{ id: 1, title: 'Post1' }];
  }
}
