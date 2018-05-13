class Api::ChatsController < ApplicationController
  def index
    @chats = current_user.chats
    render :index
  end 

  def show
    @chat = Chat.find(params[:id])
    render :show
  end 

  def create
    @chat = nil
    chat_member_ids = params[:chat_member_ids]
    chat_member_ids.map! { |id| id.to_i }
    chat_member_ids << current_user.id
    current_user.chats.each do |chat|
      @chat = chat if chat.members.pluck(:id).sort == chat_member_ids.sort
    end

    unless @chat
      @chat = Chat.create
      chat_member_ids.each do |chat_member_id|
        ChatMembership.create(member_id: chat_member_id, chat_id: @chat.id)
      end 
    end 

    render :show
  end 
end
