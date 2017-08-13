Cubetimes::Application.configure do
  config.cache_classes = true
  config.eager_load = false
  config.serve_static_assets  = true
  config.public_file_server.headers = { 'Cache-Control' => 'public, max-age=3600' }
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false
  config.action_dispatch.show_exceptions = false
  config.action_controller.allow_forgery_protection = false
  config.action_mailer.delivery_method = :test
  config.active_support.deprecation = :stderr

  class DeviseBackDoor

    def initialize(app)
      @app = app
    end

    def call(env)
      @env = env
      sign_in_through_the_back_door
      @app.call(@env)
    end

    private

    def sign_in_through_the_back_door
      if user_id = params["as"]
        user = User.find(user_id)
        sign_in(user)
      end
    end

    def params
      Rack::Utils.parse_query(@env["QUERY_STRING"])
    end
  end

  config.middleware.use DeviseBackDoor
end
