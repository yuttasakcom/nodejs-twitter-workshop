import { Controller, Get } from 'routing-controllers';

@Controller('/posts')
class PostController {
  constructor() {}

  @Get()
  get() {
    return [{ id: 1, title: 'Post1' }];
  }
}

export default PostController;
