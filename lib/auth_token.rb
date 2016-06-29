require 'jwt'

module AuthToken
  def self.issue(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS512')
  end

  def self.decode(token)
    begin
      JWT.decode(
        token,
        Rails.application.secrets.secret_key_base
      ).first.with_indifferent_access
    rescue JWT::VerificationError, JWT::DecodeError
      nil
    end
  end

  def self.valid?(token)
    !self.decode(token).nil?
  end

  def self.invalid?(token)
    !self.valid?(token)
  end
end
