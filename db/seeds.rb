# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Photo.destroy_all
User.destroy_all
Story.destroy_all
Comment.destroy_all

puts "start seed"

photo1 = Photo.create(
    {
        photographer_name: "Laura Brown",
        image: "https://www.stocksy.com/blog/wp-content/uploads/2019/07/startup-agency-using-stock-photography.jpg",
        
    }
)

photo2 = Photo.create(
    {
        photographer_name: "Josh Goodman",
        image: "https://www.canon-europe.com/media/Action-1-father_and_son_jump_off_pier_to_sea_tcm13-1374099.jpg"
    }
)

photo3 = Photo.create(
    {
        photographer_name: "Ansel Adams",
        image: "https://thecheatsmovement.com/wp-content/uploads/2020/06/img10-scaled.jpg"
    }
)

puts ("finish photo, start User")

poetic = User.create(
    {
        username: "poetic",
        name: "Kara Greene",
        location: "Chicago, IL",
        comment: "Great job!",
        description: "I love writing and long walks by the beach",
        image: "",
        interest_tag: "coffee, nature, chill"
    }
)

haiku = User.create(
    {
        username: "haiku",
        name: "Jason Reid",
        location: "Santa Fe, NM",
        comment: "Very good. I thought it would end differently. Next time try adding a bit of suspense.",
        description: "Musician, coder, storyteller.",
        image: "",
        interest_tag: "chill, suspense, mystery"
    }
)

blogqueen = User.create(
    {
        username: "blogQween",
        name: "Denise Ramirez",
        location: "Miami, FL",
        comment: "Haha, this was good! Great read!",
        description: "I love wellness, astrology, and my dog Dilly.",
        image: "",
        interest_tag: "memoir, non-fiction, essay"
    }
)

puts ("finish users, start story")

story1 = Story.create(
    {
        title: "The Bad Doll",
        likes: 23,
        wordcount: 451,
        text: "Once upon a time in the sea...",
        author: "haiku",
        user: haiku,
        photo: photo1
    }
)

story2 = Story.create(
    {
        title: "Why Love Doesn't Last",
        likes: 44,
        wordcount: 492,
        text: "I love cookies. Once when I was baking...",
        author: "blogQween",
        user: blogqueen,
        photo: photo2
    }
)

story3 = Story.create(
    {
        title: "The Pains of Sheep",
        likes: 3,
        wordcount: 387,
        text: "Sincerity is the best policy. Speaking of truth...",
        author: "poetic",
        user: poetic,
        photo: photo3
    }
)

puts ("finish stories, start comments")

comment1 = Comment.create({
    likes: 4,
    post: User.first.comments,
    wordcount: 22,
    user: poetic,
    story: story2
})

comment2 = Comment.create({
    likes: 2,
    post: User.third.comments,
    wordcount: 12,
    user: blogqueen,
    story: story1
})

comment3 = Comment.create({
    likes: 5,
    post: haiku.comments,
    wordcount: 17,
    user: haiku,
    story: story2
})

puts ("finish seeding")

