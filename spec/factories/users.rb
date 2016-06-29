FactoryGirl.define do
  sequence(:email)    {|n| "email#{n}@test.com" }
  sequence(:username) {|n| "username#{n}" }

  factory :user do
    email       { FactoryGirl.generate(:email) }
    username    { FactoryGirl.generate(:username) }
    password    "password"
  end
end
