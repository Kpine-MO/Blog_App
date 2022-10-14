class Bloger < ApplicationRecord

    has_secure_password
    
    has_many :posts
end
