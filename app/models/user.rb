class User < ActiveRecord::Base
  attr_accessor :password
  before_save :encrypt_password

  validates :user_name, :email, :password, presence: true
  validates :email, uniqueness: true

  def encrypt_password
    self.password_salt = BCrypt::Engine.generate_salt
    self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
  end

  def self.authenticate(user)
    auth_user = User.where(email: user.email).first
    password_hash = BCrypt::Engine.hash_secret(
      user.password,
      auth_user.password_salt
    )
    if auth_user && auth_user.password_hash == password_hash
      user
    else
      nil
    end
  end
end
