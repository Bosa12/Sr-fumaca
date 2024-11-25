class Photo < ApplicationRecord
    has_one_attached :image
    belongs_to :user

    validates :title, presence: true
    validates :image, attached: true
end