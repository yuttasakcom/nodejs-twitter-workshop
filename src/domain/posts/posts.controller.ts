import { Controller, Get } from 'routing-controllers';
import { PostsService } from './posts.service';

@Controller('/posts')
export class PostController {
  constructor(private service: PostsService) {}

  @Get()
  get() {
    return this.service.get();
  }
}
