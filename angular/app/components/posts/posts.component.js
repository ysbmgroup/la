class PostsController{
    constructor(API, ToastService){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
        this.posts = [];
    }

    $onInit(){
        this.getPosts();
    }

    getPosts(){
        this.API.all('posts').get('')
            .then((response) => {
            this.posts = response.data.posts;
        });
    }

    submit(){
        var data = {
            name: this.name,
            topic: this.topic,
        };

        this.API.all('post').post(data).then((response) => {
            this.ToastService.show('Post added successfully');
            this.posts = response.data.posts;
            this.name = '';
            this.topic = '';
        });
    }

    deletePost(id){
        this.API.all('post/'+id+'/delete').get('').then((response) => {
            this.ToastService.show('Post deleted successfully');
            this.posts = response.data.posts;
        });
    }
}

export const PostsComponent = {
    templateUrl: './views/app/components/posts/posts.component.html',
    controller: PostsController,
    controllerAs: 'vm',
    bindings: {}
}
