# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create([
        {title: 'The Rugova Canyon', image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/v1562682969/7889046558_d3b3f6c256_z.jpg", city: "Peć", description: "With its length of 25 km (15.5 miles) and depth of up to 1,000m (3,300 feet) Rugova is one of the most impressive canyons in Europe. The waters of Peć Bistrica river have cut their way through the mountains in a breathtaking way. Rugova Canyon offers great opportunities for hikers, rock-climbers and cave explorers. A 'Via Ferrata', called the 'Iron Trail', has been built. It is the first and the only one in the Balkans and enables hikers to climb rocks."}, 
        {title: "Dokufest", image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/v1562689557/dokufest1-1030x773.jpg", city: "Prizren", description: "Dokufest is the largest film festival in Kosovo, held in the beginning of August. In addition to the main theater spaces, improvised screening venues are also installed, including atop the Prizen fortress. During the Festival, the town is full of people and various parties go late at night in the bars. Documentary photo exhibitions, debates, master classes and lively music events are also part of the 9-day festival"},
        {title: "The Miner's Monument", image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/v1562767860/25335804013_62d2c77b10_z.jpg", city: "Mitrovica", description: "This monument was built to commemorate the memory of the local Serbian and Albanian fighters who worked at the Trepča mines in Mitrovica who bravely revolted against German occupation, forming the Miner's Troop"},
        {title: "National Library of Kosovo", image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/v1562772475/Cheap-Countries-in-Europe-to-Visit-kosovo.jpg", city: "Prishtina", description: "Nearly 100 domes and striking metal cross-hatch embellishments define , which houses close to 2 million units and two reading rooms. Located in 16,500 sq m (177,605 sq ft) of space and spread over six floors, the library offers a variety of materials, including centuries-old books, Albanian newspapers and manuscripts, and maps. Observe the floors of the main hall, adorned with marble mosaics, and experience the rich, natural light that comes through the domes. Inside, take time to view the woodwork and modernistic ornaments."}
])

User.create({email: "test2@me.com", password: "helloworld", password_confirmation: "helloworld"})

Review.create!(
        {first_name: "Sejla", last_name: "Ali", title: "Good time", review_text: "Good hike!", post_id: 1, user_id: 1}
)
