# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

puts "creating admin-users"
jeremiah = User.create(first_name: 'Jeremiah', last_name: 'Marcos', username:"jmarcos", password_digest: BCrypt::Password.create('jeremiah01'), admin: true)
terence = User.create(first_name: 'Terence', last_name: 'Stephens', username:"tstephens", password_digest: BCrypt::Password.create('terence01'), admin: true)
daniel = User.create(first_name: 'Daniel', last_name: 'Sheehan', username:"dsheehan", password_digest: BCrypt::Password.create('daniel01'), admin: true)

puts "seeding brands"

brands = ['Adidas', 'Asics', 'Air Jordan','Balenciaga',
    'Converse', 'Crocs', 'Nike', 'Yeezy', 
    'Christian Louboutin', 'New Balance', 'Prada', 'Champion', 
    'Clarks', 'Fila', 'Reebok', 'Bape', 'Diadora', 
    'Li-Ning', 'Puma', 'Saucony', 'Under Armour', 'Vans', 
    'Burberry', 'Chanel', 'Common Projects','Dior', 'Gucci', 
    'Louis Vuitton', 'Off-White', 'Saint Laurent']

    brands.each do |brand|
        Brand.create(name: brand)
    end

    puts 'seeding shoes'
    csv_text = File.read('lib/tasks/seeds/sneakers.csv')
    csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
    csv.each do |t|
        Item.create({
            name: t['name'],
            price: t['price'],
            img_url:t['img_url'],
            brand_id: t['brand_id'],
            seller_id: t['seller_id'],
            buyer_id: t['buyer_id'],
            sold: t['sold'],
            sale: t['sale'],
            rating: t['rating']
            })
    end
    puts "done seeding with admin users, brands, items"

