import { createStore } from 'vuex'

export default createStore({
  state: {
          //Arrray of posts
          postList: [{
            postId: 1,
            authorI: 10,
            authorName: "Mikel Oyarzabal",
            createTime: "Oct 24, 2022",
            comment: "Tartu 2022",
            likes: 21,
            photo: "../assets/tartu.jpg"
        },
        {
            postId: 2,
            authorId: 7,
            authorName: "Cristiano Ronaldo",
            createTime: "Oct 6, 2022",
            comment: "Anyone knows in which room is the lab today?",
            likes: 384
        },
        {
            postId: 3,
            authorId: 20,
            authorName: "Aritz Basurco",
            createTime: "Oct 23, 2022",
            comment: "Fox, one of my favorite animals",
            likes: 21,
            photo: "res/images/fox.jpg"
        },
        {
            postId: 4,
            authorId: 22,
            authorName: "Ander Pollacino",
            createTime: "Oct 22, 2022",
            comment: "San Sebastian",
            likes: 21,
            photo: "res/images/ss.jpg"
            
        },
        {
            postId: 5,
            authorId: 19,
            authorName: "Alo Vahtre",
            createTime: "Oct 2, 2022",
            comment: "Tallin, the capital of Estonia",
            likes: 384,
            photo: "res/images/tallin.jpg"
            
        },
        {
            postId: 6,
            authorId: 23,
            authorName: "Victoria Federica",
            createTime: "Oct 3, 2022",
            comment: "I'm hungry",
            likes: 1000,
            photo: ""
        },
        {
            postId: 7,
            authorId: 24,
            authorName: "German Garmendia",
            createTime: "Oct 31, 2022",
            comment: "I love you",
            likes: 2,
            photo: ""
            
        },
        {
            postId: 8,
            authorId: 25,
            authorName: "Vinicius Jr",
            createTime: "Oct 3, 2022",
            comment: "The planet earth turns slowly",
            likes: 800,
            photo: ""
        },
        {
            postId: 9,
            authorId: 26,
            authorName: "Africa Maria",
            createTime: "Oct 18, 2022",
            comment: "I'm a Swiftie",
            likes: 3000,
            photo: ""
        },
        {
            postId: 10,
            authorId: 27,
            authorName: "Sofia Bravo",
            createTime: "Oct 2, 2022",
            comment: "I need a pug i'm my life",
            likes: 2,
            photo: ""
        }
        ]
  },
  getters: {
  },
  mutations: {
    LikeButtonPressed: state => {
      console.log(this)
      console.log(state)

    },
    ResetLikes: state =>{
      console.log("Reseting all likes")
      state.postList.forEach(post =>{
        post.likes = 0;
      })
    }
  },
  actions: {
    PostLiked(context, id){
      console.log(context)
    },
    ResetAllLikes: act =>{
      console.log("Reseting all likes")
      setTimeout(function() {
        act.commit("ResetLikes")
      }, 300)
    }
  },

  modules: {
  }
})
