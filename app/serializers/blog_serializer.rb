class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :category, :image_url

  belongs_to :user
end
