require 'rails_helper'

describe Api::V1::AuthenticationsController, type: :request do
  describe "POST /login" do
    context "with correct login information" do
      it 'respond with token payload data' do
        user = create(:user, password: 'testtest')

        post '/api/v1/login',
          user: {
            username: user.username,
            password: 'testtest'
          }

        expect(json_response['token']).to be_present
        expect(json_response['user']).to be_present
        expect(json_response['user']['id']).to eq(user.id)
        expect(json_response['user']['username']).to eq(user.username)
        expect(json_response['user']['email']).to eq(user.email)
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

  describe "GET /authentication/user" do
    context 'user is authenticated' do
      it 'returns current user' do
        user = create(:user)
        sign_in_as(user) do |headers|
          get '/api/v1/authentication/user', {}, headers

          expect(json_response['user']).to be_present
          %w(id username email).each do |f|
            expect(json_response['user'][f]).to eq(user.send(f))
          end
        end
      end
    end

    context 'user is not authenticated' do
      before { get '/api/v1/authentication/user' }
      it_behaves_like 'an unauthorized request'
    end
  end
end
