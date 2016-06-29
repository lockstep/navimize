require 'rails_helper'

describe Api::V1::AuthenticationController, type: :request do
  describe "POST /login" do
    context "with correct login information" do
      it 'respond with token payload data' do
        user = create(:user, password: 'testtest')

        post '/api/v1/login',
          user: {
            username: user.username,
            password: 'testtest'
          }

        response_data = JSON.parse(response.body)
        expect(response_data['token']).to be_present
        expect(response_data['user']).to be_present
        expect(response_data['user']['id']).to eq(user.id)
        expect(response_data['user']['username']).to eq(user.username)
        expect(response_data['user']['email']).to eq(user.email)
      end
    end

    context "with incorrect login information" do
      before do
        post '/api/v1/login',
          user: {
            username: 'something',
            password: 'password'
          }
      end

      it_behaves_like 'an unauthorized request'
    end

    context "with incomplete login information" do
      before do
        post '/api/v1/login',
          user: {
            password: 'password'
          }
      end

      it_behaves_like 'an unauthorized request'
    end
  end
end
