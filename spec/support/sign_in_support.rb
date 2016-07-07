module ValidUserRequestHelper
  def sign_in_as_a_valid_user
    @user ||= FactoryGirl.create :user
    post(
      user_session_path,
      params: {
        "user[email]" => @user.email,
        "user[password]" => @user.password
      }
    )

    follow_redirect!
  end
end
