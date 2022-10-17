class BlogerSerializer < ActiveModel::Serializer
  attributes :id, :username, :about

  has_many :posts
end
