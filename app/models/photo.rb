class Photo < ApplicationRecord


  validates :title, presence: true
  validate :image_presence

  private

  def image_presence
    errors.add(:image, "deve estar presente") unless image.present?
  end
end
