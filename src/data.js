const data = {
  users: [
    {
      id: 1,
      username: 'user1',
      password: 'user1'
    },
    {
      id: 2,
      username: 'user2',
      password: 'user2'
    },
    {
      id: 1,
      username: 'user3',
      password: 'user3'
    }
  ],

  posts: [
    {
      id: 1,
      userId: 1,
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      views: [2,3],
      likes: [2,3],
      createdAt: ""
    }
  ],

  comments: [
    {
      postId: 1,
      userId: 2,
      content: ""
    }
  ]
}

export default data