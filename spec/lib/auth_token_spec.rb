require 'rails_helper'

# test_token is encoded with 'data' as payload and use HS512 algorithm
describe AuthToken do
  let(:data)        { { name: "Karun", age: 25 } }
  let(:test_token)  { "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiS2FydW4iLCJhZ2UiOjI1fQ.vvh6sg0SqZoVdsnemIw0QfTQ-T7ALUS-t3kmBVvmJJcZiF1ocbOHcSG3ZILg7i1pklgYwZpIPBffoWmSPpNJZA" }

  before do
    Rails.application.secrets.secret_key_base = 'secret'
  end

  describe "::valid?" do
    it 'is true for valid token' do
      expect(AuthToken.valid?(test_token)).to eq true
    end

    it 'is false for incomplete token' do
      expect(AuthToken.valid?('aaa.bbb')).to eq false
    end

    it 'is false for invalid token' do
      expect(AuthToken.valid?(test_token + "abc")).to eq false
    end
  end
end
