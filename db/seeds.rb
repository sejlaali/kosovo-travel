# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create([
        {title: 'The Rugova Canyon', image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/v1562682969/7889046558_d3b3f6c256_z.jpg", city: "Peja", description: "With its length of 25 km (15.5 miles) and depth of up to 1,000m (3,300 feet) Rugova is one of the most impressive canyons in Europe. The waters of Peć Bistrica river have cut their way through the mountains in a breathtaking way. Rugova Canyon offers great opportunities for hikers, rock-climbers and cave explorers. A 'Via Ferrata', called the 'Iron Trail', has been built. It is the first and the only one in the Balkans and enables hikers to climb rocks."}, 
        {title: "Dokufest", image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/v1562689557/dokufest1-1030x773.jpg", city: "Prizren", description: "Dokufest is the largest film festival in Kosovo, held in the beginning of August. In addition to the main theater spaces, improvised screening venues are also installed, including atop the Prizen fortress. During the Festival, the town is full of people and various parties go late at night in the bars. Documentary photo exhibitions, debates, master classes and lively music events are also part of the 9-day festival"},
        {title: "The Miner's Monument", image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/v1562767860/25335804013_62d2c77b10_z.jpg", city: "Mitrovica", description: "This is the most significant monument in the city. It was built in 1973 by the architect Bogdan Bogdanović. It is perched on the so-called miners hill in northern Mitrovica. Two columns holding a mining cart represent the mining tradition of the city. Mitrovica is well known for its Trepča Mines. The monument was dedicated to the miners of the city (Albanian and Serbian partisans), who lost their lives during World War II. It was designed to represent the overcoming of national divisions between Albanians and Serbs and to bear witness to the peaceful coexistence between the two communities in post-war Yugoslavia."},
        {title: "National Library of Kosovo", image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/v1562772475/Cheap-Countries-in-Europe-to-Visit-kosovo.jpg", city: "Prishtina", description: "Nearly 100 domes and striking metal cross-hatch embellishments define , which houses close to 2 million units and two reading rooms. Located in 16,500 sq m (177,605 sq ft) of space and spread over six floors, the library offers a variety of materials, including centuries-old books, Albanian newspapers and manuscripts, and maps. Observe the floors of the main hall, adorned with marble mosaics, and experience the rich, natural light that comes through the domes. Inside, take time to view the woodwork and modernistic ornaments."},
        # {title: "Mirusha Waterfalls", image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/v1562792288/tumblr_nzd0kg2PEG1rmfango1_1280.jpg", city: "Klina", description: "Mirusha Waterfalls is a chain of waterfalls found in the Mirusha River, situated on the south of the Gremnik Mountains; on the way to Gjakova at an altitude of 572 meters. Its distance from the capital city is approximately one hour. Mirusha River engraved a 10 km long canyon and created 13 river lakes with 12 waterfalls between them. The waterfall with the biggest height is the one between the sixth and seventh lake, and it is 22 meters high.Those waterfalls between the lakes, together with the stunning landscape, and rocks and caves around the waterfalls, form an overwhelming sight and present a special tourism attraction. Although the water temperature is usually quite cold, throughout summer when the temperature is high, swimming there can be incredibly pleasant."},
        {title: "Newborn Monument", image_url: "https://www-kiva-org.global.ssl.fastly.net/cms//node/10892/edit/2013-04-15_07.12.30_copy.jpg", city: "Prishtina", description: "A typographic sculpture and tourist attraction in Pristina, Kosovo. It is located in front of the Palace of Youth and Sports, It was unveiled on 17 February 2008, the day that Kosovo formally declared its independence from Serbia. The monument consists of the English-language word 'Newborn' in capital block letters, which were painted bright yellow when the sculpture was first revealed. The monument was later re-painted with the flags of the states that have recognized Kosovo. At the unveiling of the monument it was announced that it will be painted differently on the anniversary of Kosovo's independence movement day every year."},
        {title: "Bajram Pasa Mosque", image_url: "https://res.cloudinary.com/dfzjh0dui/image/upload/e_saturation:80/v1562793417/10848705_774985909250025_949476414749480436_o.jpg", city: "Mitrovica", description: "The Bajram Pasa Mosque was donated by the municipality of Bayrampaşa in Istanbul. The mosque is built in the center of the city on the site of the old Isa Beg Mosque, which was in very poor condition after the last war. The mayor of the municipality, Avni Kastrati, gave permission to build the new mosque there. It is the biggest and the most modern mosque in Kosovo. It has 2500 square meters of usable space, including spaces for religious learning."}

])

User.create({email: "test2@me.com", password: "helloworld", password_confirmation: "helloworld"})

Review.create!(
        [{first_name: "Sejla", last_name: "Ali", title: "Great time", review_text: "Rugova Canyon is certainly a must visit if you are in Peja or in Kosovo. There's a narrow winding road that goes through the canyon and you can get a bus (going to Boge) or take a taxi for a day trip. Beautiful waterfalls, zip lines, huge deep gorge walls, even sandy beaches by the river, all are possible here. There are several restaurants and places to eat and relax as well.", post_id: 1, user_id: 1, rating: 5}, {first_name: "Flying", last_name: "Tiger", title: "Beautiful!", review_text: "Beautiful mountain range! Be advised though that it is not well marked. We drove up past the camp rugova restaurant and then hiked up part of the mountain.", post_id: 1, user_id: 1, rating: 4}, {first_name: "Selma", last_name: "Ali", title: "It was okay", review_text: "It was nice to look at for a little bit but too much nature for me.", post_id: 1, user_id: 1, rating: 3}]
)