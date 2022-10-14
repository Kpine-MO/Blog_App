class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author, :category, :created_at, :image_url

end
